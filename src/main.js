import Vue from 'vue';
import App from './App.vue';
import Layout from '@/layouts/Layout.vue';
import router from '@/router/index.js';
import store from '@/store/index.js';
import VueCookies from 'vue-cookies';
import Notifications from 'vue-notification';
import i18n from './i18n.js';
import '/node_modules/dropzone/dist/dropzone.css';

Vue.use(Notifications);
Vue.use(VueCookies);
Vue.component('Layout', Layout);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
