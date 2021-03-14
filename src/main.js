import Vue from 'vue';
import App from './App.vue';
import Layout from '@/layouts/Layout.vue';
import router from '@/router/index.js';
import store from '@/store/index.js';

Vue.component('Layout', Layout);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
