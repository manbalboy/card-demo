const cardRouter = [
    {
        path: '/card-main',
        name: 'CardMain',
        component: () => import('../pages/CardMain.vue'),
    },
    {
        path: '/card-test',
        name: 'test',
        component: () => import('../pages/Test.vue'),
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('../pages/Test2.vue'),
    },
];

export default cardRouter;
