import axios from "../../config/axios-interceptor";

const categorie = {
  namespaced: true,
  state: {
    categoriesArray: [],
  },
  mutations: {
    SAVE_CATEGORIES(state, response) {
      state.categoriesArray = response;
    },
  },
  actions: {
    getCategories({ commit }) {
      return axios
        .get("http://localhost:3001/api/categorie")
        .then((res) => {
          commit("SAVE_CATEGORIES", res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteCategory({ dispatch }, idCategory) {
      return axios
        .delete(`http://localhost:3001/api/categorie/${idCategory}`)
        .then(() => {
          // "recharge" la liste des cartes => affichage sans la carte supprimée
          dispatch("getCategories");
        })
        .catch((error) => console.error(error));
    },
  },
};

export default categorie;
