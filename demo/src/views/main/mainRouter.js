// 引入分路由中的JS配置
// import HomeRouters from '../Home_J'
// import CourseRouters from '../Course_W'
// import AuoutCourseRouters from '../AuoutCourse_H'
// import ProfileRouters from '../Profile_H'


// 分路由总模块
const routers = [
    {
        path:'Home',
        name:'Home',
        component:() => import('../Home_J/Home'),
        // children:[
        //     ...HomeRouters
        // ]
    },
    {
        path:'Course',
        name:'Course',
        component:() => import('../Course_W/Course'),
        // children:[
        //     ...CourseRouters
        // ]
    },
    {
        path:'AuoutCourse',
        name:'AuoutCourse',
        meta:{
            isLogin:true
        },
        component:() => import('../AuoutCourse_H/AuoutCourse'),
        // children:[
        //     ...AuoutCourseRouters
        // ]
    },
    {
        path:'Profile',
        name:'Profile',
        meta:{
            isLogin:true
        },
        component:() => import('../Profile_H/Profile'),
        // children:[
        //     ...ProfileRouters
        // ]
    }
]

export default routers