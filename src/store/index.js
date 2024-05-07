// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null, // Estado del usuario
    dataUser: null, // Datos específicos del usuario
    theme: 'light', // Tema de la aplicación (por defecto: light)
    avatar: {
      type: 1,
      skin: 1
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_DATA_USER(state, data) {
      state.dataUser = data;
    },
    SET_THEME(state, theme) {
      state.theme = theme;
    },
    SET_AVATAR_TYPE(state, type) {
      state.avatar.type = type;
    },
    SET_AVATAR_SKIN(state, skin) {
      state.avatar.skin = skin;
    },
  },
  actions: {
    signIn({ commit }, user) {
      commit('SET_USER', user.aud);
      commit('SET_DATA_USER', user.user_metadata);
    },
    signOut({ commit }) {
      commit('SET_USER', null);
      commit('SET_DATA_USER', null);
    },
    updateAvatarType({ commit }, type) {
      commit('SET_AVATAR_TYPE', type);
    },
    updateAvatarSkin({ commit }, skin) {
      commit('SET_AVATAR_SKIN', skin);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getDataUser(state) {
      return state.dataUser;
    },
    getTheme(state) {
      return state.theme;
    },
    getAvatar(state) {
      return state.avatar;
    },
  },
});

export default store;
