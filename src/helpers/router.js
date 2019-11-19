import Vue from 'vue'
import Router from 'vue-router'

import main from '../views/main.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import register from '../views/register.vue'
import overview from '../views/overview.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: main
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/signup',
            name: 'signup',
            component: signup
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/overview',
            name: 'overview',
            component: overview,
            meta: {
                requiresAuth: true
            } 
        },
        {
            path: '/media',
            name: 'media',
            component: () => import('../views/media.vue')
        },
        {
            path: '/activities',
            name: 'activities',
            component: () => import('../views/activities.vue')
        },
        // otherwise redirect to home
        { 
            path: '*', 
            redirect: '/' 
        }
    ]
})

router.beforeEach((to, from, next) => {
    //redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/signup']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if(authRequired && !loggedIn) {
        return next('/login')
    }
    next()
})

export default router