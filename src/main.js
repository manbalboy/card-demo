import Vue from 'vue';
import App from './App.vue';
import router from '@/common/router/index.js';
import store from '@/common/index.js';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
