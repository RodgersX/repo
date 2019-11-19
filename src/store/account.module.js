import { userService } from '../services'
import { router } from '../helpers'

const user = JSON.parse(localStorage.getItem(user))
const state = user ? {status: {loggedIn: true}, user}: {status: {}, user: null}

const actions = {
    login({dispatch, commit}, {email, password}) {
        commit('LOGIN_REQUEST', {email})

        userService.login(email, password)
        .then(user => {
            commit('LOGIN_SUCESS', user)
            router.push('/overview')
        }, error => {
            commit('LOGIN_FAILURE', error)
            dispatch('alert/error', error, {root: true})
        })
    },

    logout({commit}) {
        userService.logout()
        commit('LOGOUT')
    },

    register({dispatch, commit}, user) {
        commit('REGISTER_REQUEST', user)

        userService.register(user)
        .then(user => {
            commit('REGISTER_SUCCESS', user)
            router.push('/login')
            setTimeout(() => {
                //display success message after changes on router
                dispatch('alert/success', 'Registration Successful', {root: true})
            })
        }, error => {
            commit('REGISTER_FAILURE', error)
            dispatch('alert/error', error, {root: true})
        })
    }
}

const mutations = {
    LOGIN_REQUEST(state, user) {
        state.status = { loggedIn: true}
        state.user = user
    },
    LOGIN_SUCCESS(state, user) {
        state.status = {loggedIn: true}
        state.user = user
    },
    LOGIN_FAILURE(state) {
        state.status = {}
        state.user = null
    },
    LOGOUT(state) {
        state.status = {}
        state.user = null
    },
    REGISTER_REQUEST(state, user) {
        state.status = {registering: true}
    },
    REGISTER_SUCCESS(state, user) {
        state.status = {}
    },
    REGISTER_FAILURE(state, error) {
        state.status = {}
    }
}

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
}
