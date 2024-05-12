import { createRouter, createWebHistory } from 'vue-router'

import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/apps/app1" : "/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: () => import("../App.vue") //这个是我自己的路径
    }
  ]
});

export default router;