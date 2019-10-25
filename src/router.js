import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/signup.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import(/* webpackChunkName: "about" */ './views/overview.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import(/* webpackChunkName: "about" */ './views/media.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import(/* webpackChunkName: "about" */ './views/activities.vue')
    }
  ]
})
