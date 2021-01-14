
const routers = [
    {
        path:'/modify-h',
        name:'modify-h',
        component:() => import('./modify-h')
    },
    {
        path:'/collection-h',
        name:'collection',
        component:() => import('./collection-h')
    },
    {
        path:'/myclass-h',
        name:'myclass',
        component:() => import('./myclass-h')
    },
    {
        path:'/study-currency-h',
        name:'study-currency',
        component:() => import('./study-currency-h.vue')
    },
    {
        path:'/teacher-h',
        name:'teacher',
        component:() => import('./teacher-h.vue')
    },
    {
        path:'/course-h',
        name:'course',
        component:() => import('./course-h.vue')
    },
    {
        path:'/set-name-h',
        name:'set-name',
        component:() => import('./set-name-h.vue')
    },
    
    
]

export default routers