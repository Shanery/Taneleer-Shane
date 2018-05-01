// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.use(Vuex)

import { faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands'

import linkifyStr from 'linkifyjs/string';

const store = new Vuex.Store({
  state: {
    services: {
      "Twitter": {
        name: "Twitter",
        logo: faTwitter,
      },
      "Instagram": {
        name: "Instagram",
        logo: faInstagram
      }
    }
  },
  getters: {
    linkify: (state) => (string) => {
      return linkifyStr(string);
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
