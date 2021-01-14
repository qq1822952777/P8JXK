const routers = [
    {
        path:'home',
        name:'home',
        component:() => import('./Home')
    },
    {
        path:'shopcar',
        name:'shopcar',
        meta:{
            isLogin:true
        },
        component:() => import('./Shopcar')
    },
    {
        path:'cart',
        name:'cart',
        component:() => import('./Cart')
    },
    {
        path:'profile',
        name:'profile',
        meta:{
            isLogin:true
        },
        component:() => import('./Profile')
    }
]

export default routers