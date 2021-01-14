import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main/Main'
import maiRouter from '@/views/main/mainRouter'
// import LoginRouters from '../views/Login_J'
Vue.use(VueRouter)
const routes = [
  {
    path:'/',
    name:'Main',
    component:Main,
    redirect:'/Home',
    children:[
      ...maiRouter
    ]
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search_W/Search')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login_J/Login'),
    children:[
      {
        path: 'mm',
        name: 'mm',
        component: () => import('../views/Login_J/MoblLogin')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
