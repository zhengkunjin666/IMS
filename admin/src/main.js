import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import moment from "moment";

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "/api";

Vue.prototype.$moment = moment;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
