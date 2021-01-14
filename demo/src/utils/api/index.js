// 引入axios请求的封装
// 通过 async 异步操作 await 等待这个请求
// 请求收到后 就返回出数据 data.data 大部分数据结构皆是如此 可自定义 视情况而定
// 相应的请求在相应的页面 导入这个模块 解构赋值 拿取要用到的请求 使用 name_zdy().then(res=>{ },err=>{})使用它
import server from '../server'

// 定义请求
const name_zdy = async function(){
    var {data} = await server.get('/地址')
    return Promise.resolve(data.data)
}

// 导出请求
export {
    name_zdy
}