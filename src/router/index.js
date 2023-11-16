import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/index.vue')
    },
    {
        path: '/thank-you',
        name: 'thank-you',
        component: () => import('../pages/thank-you.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../pages/not-found.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
