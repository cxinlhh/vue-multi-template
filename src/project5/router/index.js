import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import("@/views/index.vue")
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import("@/views/page1.vue")
    }
  ]
})
