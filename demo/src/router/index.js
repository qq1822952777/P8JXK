import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 路由引入项
import Main from '../views/main/Main.vue';            // 设置首页
import maiRouter from "@/views/main/mainRouter";      // 底部导航的主页面
import profilRouters from "../views/Profile_H";       // 黄俊的个人页面引入的路由组件
import Course from "../views/Course_W";               // 王盛鑫的课程页面引入的路由组件
import Home_J from '../views/Home_J';                 // 蒋希康的首页引入的路由组件

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: "/Home",
    children: [...maiRouter],
  },
  {
      path:'/AuoutCourse',
      name:'AuoutCourse',
      meta:{
          isLogin:true
      },
      component:() => import('../views/AuoutCourse_H/AuoutCourse')
  },
  {
    path: '/Search',
    name: 'Search',
    component: ()=> import('../views/Search_W/Search')   
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login_J/Login"),
  },
  // 将路由向下扩展 ... 
  ...profilRouters,
  ...Home_J,
  ...Course
]

console.log(routes);

const router = new VueRouter({
  routes,
});

export default router;
