import Vue from 'vue'
import Vuex from 'vuex'

// MODULES 
import card from'./modules/card.module'
import categorie from'./modules/categorie.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    card,
    categorie
  }
})
