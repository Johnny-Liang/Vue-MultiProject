import Vue from 'vue'
import Router from 'vue-router'
import application from '@/page/application'

Vue.use(Router)

let routes = {
  routes: [
    {
      path: '/',
      name: 'application',
      component: application
    }
  ]
}
export default new Router(routes)
