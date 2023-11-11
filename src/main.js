import { createApp } from "vue";
import App from "./App.vue";
import { vMaska } from "maska"
import router from './router';

// Подключаем стили
import "/src/assets/scss/app.scss";

createApp(App)
    .use(router)
    .directive("maska", vMaska)
    .mount("#app")
