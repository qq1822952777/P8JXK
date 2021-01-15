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
        path:'/TeaccherDetail',
        name:'TeaccherDetail',
        component:() => import('./TeaccherDetail')
    }
]

export default routes