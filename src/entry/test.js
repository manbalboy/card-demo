import Vue from 'vue';
import test from '@/pages/test.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(test),
}).$mount('#app');
