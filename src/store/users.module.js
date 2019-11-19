import { userService } from '../services'

const state = {
    all: {}
}

const actions = {
    getAll({commit}) {
        commit('GET_ALL_REQUEST')

        userService.getAll()
        .then(
            users => commit('GET_ALL_SUCCESS', users),
            error => commit('GET_ALL_FAILURE', error)
        )
    },
    delete({commit}, id) {
        commit('DELETE_REQUEST', id)
        userService.delete(id)
        .then(
            user => commit('DELETE_SUCCESS', id),
            error => commit('DELETE_FAILURE', {id, error: error.toString()})
        )
    }
}

const mutations = {
    GET_ALL_REQUEST(state) {
        state.all = {loading: true}
    },
    GET_ALL_SUCCESS(state, users) {
        state.all = {items:users}
    },
    GET_ALL_FAILURE(state, error) {
        state.all = {error}
    },
    DELETE_REQUEST(state, id) {
        state.all.items = state.all.items.map(user =>
            user.id === id ? {...user, deleting: true}:user)
    },
    DELETE_SUCCESS(state, id) {
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    DELETE_FAILURE(state, {id, error}) {
        state.all.items = state.all.items.map(user => {
            if(user.id === id) {
                //make a copy of user without deleteError:[error] property
                const {deleting, ...userCopy} = user 
                //return copy of user with 'deleteError:[error]' property
                return {...userCopy, deleteError: error}
            }
            return user
        })
    }
}

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
}