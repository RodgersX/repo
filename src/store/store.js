import Vue from 'vue'
import Vuex from 'vuex'

import { notification } from './notification.module'
import { account } from './account.module'
import { users } from './users.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    notification,
    account,
    users
  }
})
 

