import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Citlalli from './components/Citlalli.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projects: [],
    aboutme: {},
  },
  actions: {
    SET_FIELD: ({ commit }, data) => {
      commit('setField', data)
    },  
  },
  mutations: {
    setField: function(state, data) {
      state[data.key] = data.value
    },
  }
})

const routes = {
  '/': App,
  '/citlalli': Citlalli
}

new Vue({
  vuetify,
  store: store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) },
}).$mount('#app')

