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

import * as linkify from 'linkifyjs';
import plugin from 'linkifyjs/plugins/hashtag';
import linkifyStr from 'linkifyjs/string';
plugin(linkify);

const store = new Vuex.Store({
  state: {
    services: {
      "Twitter": {
        name: "Twitter",
        logo: faTwitter,
        hashtagUrl: 'https://twitter.com/hashtag/'
      },
      "Instagram": {
        name: "Instagram",
        logo: faInstagram,
        hashtagUrl: 'https://instagram.com/explore/tags/'
      }
    }
  },
  getters: {
    linkifyStr: (state) => (string, service) => {
      return string.linkify({
        formatHref: function (href, type) {
          if (type === 'hashtag') {
            href = state.services[service].hashtagUrl + href.substring(1);

            if (service == "Twitter") {
              href = href + "?src=hash";
            }
          }
          return href;
        }
      });
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
