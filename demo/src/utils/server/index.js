import axios from "axios";
import store from "../../store";
import Vue from "vue";
import loading from "@/components/loading.vue";
Vue.use(loading);
// guid.js 按照规则生成的 ID 也是请求要求携带的需求 用户的设备生成独有的ID
import { Guid } from "./guid";
if (!localStorage.getItem("DeviceID")) {
  let id = Guid.NewGuid().ToString("N");
  localStorage.setItem("DeviceID", id);
}

const server = axios.create({
  baseURL: " http://120.53.31.103:84",
  timeout: 20000,
});

server.interceptors.request.use(
  (config) => {
    // 请求时显示
    Vue.$loading.show();
    // 获取到登陆后的 token  页面请求数据的需求 要在请求时 需要该值
    let token = store.state.token;
    config.headers = {
      Authorization: `Bearer ${token}`,
      DeviceType: "H5",
      DeviceID: localStorage.getItem("DeviceID"),
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

server.interceptors.response.use(
  (res) => {
    // 响应式隐藏
    Vue.$loading.hide();
    if (res.data === "无效的token") {
      alert("token无效 ，请重新登录 跳转至登录页");
    } else {
      return res;
    }
  },
  (err) => {
    switch (err.code) {
      case 500:
        console.log("服务器错误");
        break;
      case 404:
        console.log("页面找不到了");
        break;
      default:
        return Promise.reject(err);
    }
  }
);

export default server;
