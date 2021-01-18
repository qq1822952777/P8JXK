// 引入axios请求的封装
// 通过 async 异步操作 await 等待这个请求
// 请求收到后 就返回出数据 data.data 大部分数据结构皆是如此 可自定义 视情况而定
// 相应的请求在相应的页面 导入这个模块 解构赋值 拿取要用到的请求 使用 name_zdy().then(res=>{ },err=>{})使用它
import server from '../server'

// 登录请求  携带端口要求的验证参数
const isLogin = async function({mobile,password,type}){
    var {data} = await server.post('/api/app/login',{mobile,password,type})
    return Promise.resolve(data)
}

// 首页轮播图请求  
const homeswipereq = async function(){
    var {data} = await server.get('/api/app/banner')
    return Promise.resolve(data.data)
}
// 首页数据请求  
const homereq = async function(){
    var {data} = await server.get('/api/app/recommend/appIndex')
    return Promise.resolve(data.data)
}
// 个人信息
const userInof = async function(){
    var {data} = await server.get('/api/app/userInfo')
    return Promise.resolve(data)
}
// 修改个人信息
const user= async function(i){
    var {data} = await server.put('/api/app/user?',i)
    return Promise.resolve(data)
}
// 关注的老师
const collect= async function(){
    var {data} = await server.get('/api/app/collect?type=2')
    return Promise.resolve(data)
}
// 导出请求
export {
    isLogin,
    homeswipereq,
    homereq,
    userInof,
    user,
    collect
}