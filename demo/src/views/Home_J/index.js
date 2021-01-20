// 无底部导航的路由集合 
const routes = [
    {
        path:'/TopTeacher',
        name:'TopTeacher',
        meta:{
            title:'名师',
            topShow:true
        },
        component:() => import('./TopTeacher')
    },
    {
        path:'/TeaccherDetail/:id',
        name:'TeaccherDetail',
        component:() => import('./TeaccherDetail')
    },
    {
        path:'/TopTeachers',
        name:'TopTeachers',
        component:() => import('./TopTeachers')
    },
    {
        path:'/HotInformation',
        name:'HotInformation',
        component:() => import('./HotInformation')
    }
]

export default routes