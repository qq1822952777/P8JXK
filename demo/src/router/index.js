import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 路由引入项
import Main from '@/views/main/Main'
import maiRouter from '@/views/main/mainRouter'



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
    component: ()=> import('../views/Search_W/Search')   
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login_J/Login')
  },
  // 将路由向下扩展 ... 
  
]

const router = new VueRouter({
  routes
})

export default router
