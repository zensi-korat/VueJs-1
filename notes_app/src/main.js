import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.provide("main", "Main Value from app");

app.use(createPinia());
app.mount("#app");
