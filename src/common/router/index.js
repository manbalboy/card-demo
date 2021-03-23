import Vue from 'vue';
import VueRouter from 'vue-router';
import cardRouter from '@/modules/card/router/card-router.js';

Vue.use(VueRouter);
const routes = [...cardRouter];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
