import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main.vue'
import store from './store'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/signup.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('./views/overview.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('./views/media.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('./views/activities.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
