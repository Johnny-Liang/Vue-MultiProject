const fs = require('fs');
const config = require('../config')

// 创建打包入口

fs.readFile('./router/index.js', 'utf8', function (err, data) {
  let routeStr = data.match(/(\[[\S|\n|\W]{0,}\])/)[0]
  routeStr = routeStr.replace(/\(\) ?=> ?import ?\(("[^,|\n|\}]+")\)/g, '$1')
  let routeArr = JSON.parse(routeStr)
  function routeTranOpt (allPath, arr) {
    let opt = {}
    for (let i in arr) {
      let route = arr[i]
      if (route.path !== '/') {
        route.path = allPath ? `${allPath}/${route.path}` : route.path
        if (route.children) {
          let childRouteArr = routeTranOpt(route.path, route.children)
          opt = Object.assign(opt, childRouteArr)
          delete route['children']
        }
        let name = route.path.replace(/\W/g, '0').substr(1)
        opt[name] = route.component
      }
    }
    return opt
  }
  let routeOptions = routeTranOpt('', routeArr)
  let importStr = ''
  let register = ''
  for (let name in routeOptions) {
    importStr += `import ${name} from '${routeOptions[name]}'\n`
    register += `Vue.component('${name}', ${name})\n`
  }
  let packStr = `${importStr}\n
  const install = function (Vue, opts = {}) {\n
    ${register}
  }\n
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  export default install`
  fs.writeFileSync('./pack.js', packStr)
});
