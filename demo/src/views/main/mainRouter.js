// 底部导航路由总模块
const routers = [
  {
    path: "Home",
    name: "Home",
    component: () => import("../Home_J/Home"),
  },
  {
    path: "Course",
    name: "Course",
    component: () => import("../Course_W/Course"),
  },
  {
    path: "AuoutCourse",
    name: "AuoutCourse",
    meta: {
      isLogin: true,
    },
    component: () => import("../AuoutCourse_H/AuoutCourse"),
  },
  {
    path: "Profile",
    name: "Profile",
    meta: {
      isLogin: true,
    },
<<<<<<< HEAD
    {
        path:'Profile',
        name:'Profile',
        meta:{
            isLogin:true
        },
        component:() => import('../Profile_H/Profile')
    }
]
=======
    component: () => import("../Profile_H/Profile"),
  },
];
>>>>>>> f9b2ecdd8dbe3ee842685b1528b229d4a04c6659

export default routers;
