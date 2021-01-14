import Vue from 'vue'
import Vuex from 'vuex'

import createPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

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
      class:[]
    }
  },
  mutations: {
    afterRead(state,img){
      state.modifyHJ.img=img
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersisted({
      storage: localStorage    
    })
  ],
})
