import Vue from 'vue';
import App from './App.vue';
import router from '@/common/router/index.js';
import store from '@/common/store/index.js';
import scard from '@/config/scard.js';
import final from '@/utils/const.js';

const scardInstance = new scard(final);
Vue.prototype.$scard = scardInstance;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
