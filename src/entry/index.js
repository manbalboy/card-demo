import Vue from 'vue';
import page from '@/pages/index.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(page),
}).$mount('#app');
