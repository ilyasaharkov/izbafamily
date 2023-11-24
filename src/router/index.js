import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/index.vue')
    },
    {
        path: '/thank-you',
        name: 'ThankYou',
        component: () => import('../pages/thankYou.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',мммммммммммммммм
        component: () => import('../pages/notFound.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
