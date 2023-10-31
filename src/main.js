import { createApp } from "vue";
import App from "./App.vue";
import { vMaska } from "maska"

// Подключаем стили
import "/src/assets/scss/app.scss";

createApp(App).directive("maska", vMaska).mount("#app")
