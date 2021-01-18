// 无底部导航的路由集合 
const routes = [
    {
        path:'/Register',
        name:'Register',
        meta:{
            title:'绑定手机号验证',
            topShow:true
        },
        component:() => import('./Register')
    },
    {
        path:'/SetPass',
        name:'SetPass',
        meta:{
            title:'设置密码',
            topShow:true
        },
        component:() => import('./SetPass')
    },
    {
        path:'/MobileLogin',
        name:'MobileLogin',
        component:() => import('./MobileLogin')
    }
]

export default routes