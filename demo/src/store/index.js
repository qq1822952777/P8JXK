import Vue from "vue";
import Vuex from "vuex";

import createPersisted from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modifyHJ: {
      grade: "",
      class: "",
    },
    name: "",
    token: "",
    tup: "",
    id: "",
  },
  mutations: {
    classH(state,val){
      state.modifyHJ.class = val
    },
    afterRead(state, img) {
      state.modifyHJ.img = img;
    },
    nanHJ(state, val) {
      state.modifyHJ.sex = val;
    },
    nvHJ(state, val) {
      state.modifyHJ.sex = val;
    },
    dateHJ(state, val) {
      state.modifyHJ.birthday = val;
    },
    cityHJ(state, val) {
      state.modifyHJ.city = val;
    },
    mysetMoverHJ(state) {
      state.token = "";
    },
    gradeHJ(state, val) {
      state.modifyHJ.grade = val;
    },
    cityHJ(state, val) {
      state.modifyHJ.city = val;
    },
    setnameHJ(state, val) {
      state.name = val;
      state.modifyHJ.name = val;
    },
    // 手机号登录
    mobileLogin(state, { token, name, tel }) {
      state.token = token;
      state.name = name;
      state.modifyHJ.tel = tel;
      state.modifyHJ.name = name;
    },
    add(state, id) {
      // console.log(id);
      state.id = id;
    },
  },
  actions: {},
  modules: {},
  actions: {},
  modules: {},
  plugins: [
    createPersisted({
      storage: localStorage,
    }),
  ],
});
