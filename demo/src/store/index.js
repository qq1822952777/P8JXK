import Vue from "vue";
import Vuex from "vuex";

import createPersisted from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modifyHJ:{
      img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg',
      name:'',
      tel:'',
      sex:'',
      date:'',
      city:'',
      grade:'',
      class:''
    },
    name:'',
    token:''   
  },
  mutations: {
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
      state.modifyHJ.date = val;
    },
    cityHJ(state, val) {
      state.modifyHJ.city = val;
    },
    mysetMoverHJ(state) {
      state.modifyHJ.name = "";
    },
    gradeHJ(state, val) {
      state.modifyHJ.grade = val;
    },
    cityHJ(state,val){
      state.modifyHJ.city=val
    },
    // 手机号登录
    mobileLogin(state,{token,name}){
      state.token = token;
      state.name = name;
    }
  },
  actions: {
  },
  modules: {
  },
  actions: {},
  modules: {},
  plugins: [
    createPersisted({
      storage: localStorage,
    }),
  ],
});
