import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import about from './modules/about.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    about
  }
})
