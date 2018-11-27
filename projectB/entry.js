import routes from './router'

const install = function (vm, opts = {}) {
  vm.$router.addRoutes(routes)
}
if (typeof window !== 'undefined' && window.vm) {
  install(window.vm);
}

export default install
