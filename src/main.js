import { createApp } from "vue";
import App from "./App.vue";
import api from "./api/api";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

// Vue.prototype.$api = api;
// Vue.config.productionTip = false;

loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.config.globalProperties.$api = api;
app.config.globalProperties.productionTip = false;
app.mount("#app");
