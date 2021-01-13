import axios from 'axios'

const server = axios.create({
    baseURL:'',
    timeout:10000
})

server.interceptors.request.use(config => {
    if(localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token')
    }
    return config
},err => {
    console.log(err);
})

server.interceptors.response.use(res => {
    if(res.data === "无效的token") {
        alert('token无效 ，请重新登录 跳转至登录页')
    }else{
        return res
    }
},err => {
    switch(err.code) {
        case 500:
            console.log('服务器错误')
        break;
        case 404:
            console.log('页面找不到了')
        break;
        default:
            return Promise.reject(err)
    }
})

export default server