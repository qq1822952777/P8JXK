import axios from "axios";
import Vue from "vue";
import loading from "@/components/loading.vue";
Vue.use(loading);

const server = axios.create({
  baseURL: "http://120.53.31.103:84",
  timeout: 10000,
});

server.interceptors.request.use(
  (config) => {
    Vue.$loading.show();
    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token");
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

server.interceptors.response.use(
  (res) => {
    Vue.$loading.hide();
    if (res.data === "无效的token") {
      alert("token无效 ，请重新登录 跳转至登录页");
      Vue.$loading.hide();
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
