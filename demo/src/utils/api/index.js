// 引入axios请求的封装
// 通过 async 异步操作 await 等待这个请求
// 请求收到后 就返回出数据 data.data 大部分数据结构皆是如此 可自定义 视情况而定
// 相应的请求在相应的页面 导入这个模块 解构赋值 拿取要用到的请求 使用 name_zdy().then(res=>{ },err=>{})使用它
import server from '../server'

// 密码登录  携带端口要求的验证参数
const isLogin = async function({mobile,password,type}){
    var {data} = await server.post('/api/app/login',{mobile,password,type})
    return Promise.resolve(data)
}          
// 验证码登录  携带端口要求的验证参数
const verificationLogin = async function({mobile,sms_type}){
    var {data} = await server.post('/api/app/smsCode',{mobile,sms_type})
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
// 老师详情页数据
const teacherDetile = async function(id){
    var {data} = await server.get('/api/app/teacher/'+id)
    return Promise.resolve(data.data.teacher)
}
// 老师详情页的评论信息  #### 数据为空
const teacherDiscussDetile = async function({limit,page,teacher_id}){
    var {data} = await server.post('/api/app/teacher/comment',{limit,page,teacher_id})
    return Promise.resolve(data.data)
}
// /api/app/teacher/collect/3
// 老师的关注与取消
const isTeacherAttention = async function({id}){
    var {data} = await server.get('/api/app/teacher/collect/196'+id)
    return Promise.resolve(data.data)
}





// 导出请求
export {
    isLogin,
    homeswipereq,
    homereq,
    teacherDetile,
    teacherDiscussDetile,
    isTeacherAttention,
    verificationLogin,
    
}