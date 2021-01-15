// 无底部导航的路由集合
const routes = [
  {
    path: "/particulars",
    name: "particulars",
    component: () => import("./particulars.vue"),
  },
  {
    path: "/verify",
    name: "verify",
    component: () => import("./verify.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () => import("./payment.vue"),
  },
  {
    path: "/WeChat",
    name: "WeChat",
    component: () => import("./WeChat.vue"),
  },
];

export default routes;
