import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 路由引入项
<<<<<<< HEAD
import Main from '@/views/main/Main'
import maiRouter from '@/views/main/mainRouter'
import profilRouters from '../views/Profile_H'
import Home_J from '../views/Home_J'

=======
import Main from "@/views/main/Main";
import maiRouter from "@/views/main/mainRouter";
import profilRouters from "../views/Profile_H";
import Course from "../views/Course_W";
>>>>>>> f9b2ecdd8dbe3ee842685b1528b229d4a04c6659

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: "/Home",
    children: [...maiRouter],
  },
  {
<<<<<<< HEAD
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
=======
    path: "/Search",
    name: "Search",
    component: () => import("../views/Search_W/Search"),
>>>>>>> f9b2ecdd8dbe3ee842685b1528b229d4a04c6659
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login_J/Login"),
  },
<<<<<<< HEAD
  // 将路由向下扩展 ... 
  ...profilRouters,
  ...Home_J
]
=======
  // 将路由向下扩展 ...
  ...profilRouters,
  ...Course,
];
>>>>>>> f9b2ecdd8dbe3ee842685b1528b229d4a04c6659



const router = new VueRouter({
  routes,
});

export default router;
