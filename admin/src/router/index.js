import Vue from "vue";
import VueRouter from "vue-router";
import RoutesCommon from "./routesCommon.js";
import RoutesPermission from "./RoutesPermission.js";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import modelsStorage from "../../models/storage";

Vue.use(VueRouter);

const routes = RoutesPermission.concat(RoutesCommon);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const storage = new modelsStorage();
  const TOKEN = storage.get("ims");
  if (!TOKEN && to.name !== "TheLogin") {
    next({ name: "TheLogin", replace: true });
    return;
  }
  if (TOKEN) {
    if (to.name === "TheLogin") {
      next({ name: "ArticleIndex", replace: true });
      return;
    }
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
