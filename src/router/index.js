import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/cookies',
        name: 'cookies',
        component: () => import('@/views/VueCookiesTest.vue'),
    },
    {
        path: '/dropzone',
        name: 'dropzone',
        component: () => import('@/views/Vue2DropZone.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
