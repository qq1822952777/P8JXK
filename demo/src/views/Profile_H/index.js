
const routers = [
    {
        // 个人主页
        path:'/modify-h',
        name:'modify-h',
        meta:{
            isLogin:true
        },
        component:() => import('./modify-h')
    },
    {
        // 我的收藏
        path:'/collection-h',
        name:'collection',
        meta:{
            isLogin:true
        },
        component:() => import('./collection-h')
    },
    {
        // 我的学习
        path:'/myclass-h',
        name:'myclass',
        meta:{
            isLogin:true
        },
        component:() => import('./myclass-h')
    },
    {
        // 我的余额
        path:'/study-currency-h',
        name:'study-currency',
        meta:{
            isLogin:true
        },
        component:() => import('./study-currency-h.vue')
    },
    {
        // 我的关注
        path:'/teacher-h',
        name:'teacher',
        meta:{
            isLogin:true
        },
        component:() => import('./teacher-h.vue')
    },
    {
        // 订单
        path:'/course-h',
        name:'course',
        meta:{
            isLogin:true
        },
        component:() => import('./course-h.vue')
    },
    {
        // 订单---详情
        path:'/course-details-h',
        name:'course-details',
        component:() => import('./course-details-h.vue')
    },
    {
        // 设置个人信息---姓名
        path:'/set-name-h',
        name:'set-name',
        meta:{
            isLogin:true
        },
        component:() => import('./set-name-h.vue')
    },
    {
        // 设置个人信息---性别
        path:'/set-sex-h',
        name:'set-sex',
        meta:{
            isLogin:true
        },
        component:() => import('./set-sex-h.vue')
    },
    {
        // 我的消息
        path:'/news-h',
        name:'news',
        meta:{
            isLogin:true
        },
        component:() => import('./news-h.vue')
    },
    {
        // 我的优惠券
        path:'/coupon-h',
        name:'coupon',
        component:() => import('./coupon-h.vue')
    },
    {
        // 学习卡
        path:'/study-card-h',
        name:'study-card',
        component:() => import('./study-card-h.vue')
    },
    {
        // 设置
        path:'/myset-h',
        name:'myset',
        component:() => import('./myset-h.vue')
    },
    {
        // 登录
        path:'/login-h',
        name:'login',
        component:() => import('./login-h.vue')
    },
    {
        // 设置密码
        path:'/setpass-h',
        name:'setpass',
        component:() => import('./setpass-h.vue')
    },
    
    
]

export default routers