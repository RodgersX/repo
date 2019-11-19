import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import store from './store/store'
import { router } from './helpers/router'

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  vuetify,
  VeeValidate,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
