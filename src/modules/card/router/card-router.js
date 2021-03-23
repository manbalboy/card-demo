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
];

export default cardRouter;
