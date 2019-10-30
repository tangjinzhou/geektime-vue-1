import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/1.4",
      name: "如何触发组件的更新",
      component: () => import("./views/1.4")
    },
    {
      path: "/1.5",
      name: "合理应用计算属性和侦听器",
      component: () => import("./views/1.5")
    },
    {
      path: "/1.6",
      name: "生命周期的应用场景和函数式组件",
      component: () => import("./views/1.6")
    },
    {
      path: "/1.7",
      name: "指令的本质",
      component: () => import("./views/1.7")
    },
    {
      path: "/1.8",
      name: "provie/inject",
      component: () => import("./views/1.8")
    },
    {
      path: "/1.9",
      name: "如何优雅的获取跨层级组件(拒绝递归)",
      component: () => import("./views/1.9")
    },
    {
      path: "/1.10",
      name: "template 和 JSX 对比及其他们的本质",
      component: () => import("./views/1.10")
    }
  ]
});
