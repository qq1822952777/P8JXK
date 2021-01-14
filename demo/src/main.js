import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入通用css及rem
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/js/rem'


// 移动端布局 vant
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// // vant 图片懒加载 img的src替换为 v-lazy="路径"
// import { Lazyload } from "vant";
// Vue.use(Lazyload);

// PC端布局 element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// axios 请求 自定义是基于axios 必须有
import axios from "axios";
Vue.prototype.$axios = axios;


// echarts图表
// 1.安装 cnpm i echarts --save
// 2.使用图表的页面引入 let echarts = require("echarts")
// 3.定义 div 并给ID设置宽高
// 4.在mounted钩子函数中
//    
//  var myChart = echarts.init(document.getElementById("main"));
//     粘贴的图表代码
//  myChart.setOption(this.option);

// 全屏
// 1.安装 cnpm i screenfull --save
// 2.使用全屏功能的页面引入 import screenfull from “screenfull”
// 3.定义一个点击事件
// screen() {
//   screenfull.toggle();
//   //toggle是反转的意思 在全屏和退出全屏之间切换
// }



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
