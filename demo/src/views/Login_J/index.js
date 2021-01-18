// 无底部导航的路由集合 
const routes = [
    {
        path:'/FindPass',
        name:'FindPass',
        component:() => import('./FindPass')
    },
    {
        path:'/QQLogin',
        name:'QQLogin',
        component:() => import('./QQLogin')
    },
    {
        path:'/Register',
        name:'Register',
        meta:{
            title:'绑定手机号',
            topShow:true
        },
        component:() => import('./Register')
    },
    {
        path:'/WXLogin',
        name:'WXLogin',
        component:() => import('./WXLogin')
    },
    {
        path:'/SetPass',
        name:'SetPass',
        meta:{
            title:'设置密码',
            topShow:true
        },
        component:() => import('./SetPass')
    }
]

export default routes