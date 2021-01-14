// 底部导航路由总模块
const routers = [
    {
        path:'Home',
        name:'Home',
        component:() => import('../Home_J/Home')
    },
    {
        path:'Course',
        name:'Course',
        component:() => import('../Course_W/Course')
    },
    {
        path:'AuoutCourse',
        name:'AuoutCourse',
        meta:{
            isLogin:true
        },
        component:() => import('../AuoutCourse_H/AuoutCourse')
    },
    {
        path:'Profile',
        name:'Profile',
        meta:{
            isLogin:true
        },
        component:() => import('../Profile_H/Profile')
    }
]

export default routers