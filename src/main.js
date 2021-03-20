import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
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

new Vue({
  vuetify,
  render: h => h(App),
  store: store
}).$mount('#app')
