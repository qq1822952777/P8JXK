
const routers = [
    {
        // 个人主页
        path:'/modify-h',
        name:'modify-h',
        component:() => import('./modify-h')
    },
    {
        // 我的收藏
        path:'/collection-h',
        name:'collection',
        component:() => import('./collection-h')
    },
    {
        // 我的学习
        path:'/myclass-h',
        name:'myclass',
        component:() => import('./myclass-h')
    },
    {
        // 我的余额
        path:'/study-currency-h',
        name:'study-currency',
        component:() => import('./study-currency-h.vue')
    },
    {
        // 我的关注
        path:'/teacher-h',
        name:'teacher',
        component:() => import('./teacher-h.vue')
    },
    {
        // 订单
        path:'/course-h',
        name:'course',
        component:() => import('./course-h.vue')
    },
    {
        // 设置个人信息---姓名
        path:'/set-name-h',
        name:'set-name',
        component:() => import('./set-name-h.vue')
    },
    {
        // 设置个人信息---性别
        path:'/set-sex-h',
        name:'set-sex',
        component:() => import('./set-sex-h.vue')
    },
    {
        // 我的消息
        path:'/news-h',
        name:'news',
        component:() => import('./news-h.vue')
    },
    
    
]

export default routers