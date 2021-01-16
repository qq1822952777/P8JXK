import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 判定token引入vuex库
import store from '../store'
// 路由引入项
import Main from '../views/main/Main.vue';            // 设置首页
import maiRouter from "@/views/main/mainRouter";      // 底部导航的主页面
import profilRouters from "../views/Profile_H";       // 黄俊的个人页面引入的路由组件
import Course from "../views/Course_W";               // 王盛鑫的课程页面引入的路由组件
import Home_J from '../views/Home_J';                 // 蒋希康的首页引入的路由组件
import Login_J from '../views/Login_J';               // 蒋希康的登录页引入的路由组件      
import fore from "../views/AuoutCourse_H/index.js";   //预习
const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: "/Home",
    children: [...maiRouter],
  },
  {
    path: "/AuoutCourse",
    name: "AuoutCourse",
    meta: {
      isLogin: true,
    },
    component: () => import("../views/AuoutCourse_H/AuoutCourse"),
  },
  {
    path: "/Search",
    name: "Search",
    component: () => import("../views/Search_W/Search"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login_J/Login"),
  },
  // 将路由向下扩展 ...
  ...profilRouters,
  ...Home_J,
  ...Course,
  ...Login_J,
  ...fore,
];

const router = new VueRouter({
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if(to.meta.isLogin){
    if(store.state.token){
      next()
    }else{
      next('/Login')
    }
  }else{
    next()
  }
})


// 解决因 路由守卫后导致的跳转被守卫路由 会反馈错误 
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

export default router;
