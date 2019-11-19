const state = {
    type: null,
    message: null
}

const actions = {
    success({commit}, message) {
        commit('SUCCESS', message)
    },
    error({commit}, message) {
        commit('ERROR', message)
    },
    clear({commit}, message) {
        commit('CLEAR', message)
    }
}

const mutations = {
    SUCCESS(state, message) {
        state.type = 'alert-success'
        state.message = message
    },
    error(state, message) {
        state.type = 'alert-danger'
        state.message = message
    },
    CLEAR(state, message) {
        state.type = null
        state.message = null
    }
}

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
}