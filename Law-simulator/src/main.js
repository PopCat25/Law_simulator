import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';

import './assets/main.css';

const app = createApp(App);

app.directive('focus', {
    mounted(el) {
        el.focus();
    }
});

app.use(router).use(store).mount('#app');
