import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'observeBox',
        component: () => import('@/views/observeBox/index.vue')
    },
    {
        path: '/clickCopy',
        name: 'clickCopy',
        component: () => import('@/views/clickCopy/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
