import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VeeValidatePlugin from "./includes/validation";
import "./assets/base.css";
import "./assets/main.css";

createApp(App).use(createPinia()).use(VeeValidatePlugin).mount("#app");
