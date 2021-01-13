import Vue from 'vue'
import VueRouter from 'vue-router'
import maiRouter from '@/views/main/mainRouter'
import Main from '@/views/main/Main'
Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    name:'Main',
    component:Main,
    redirect:'/home',
    children:[
      ...maiRouter
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
