import { createRouter, createWebHistory } from 'vue-router';
import PasswordGenerated from '@/components/pages/PasswordGeneratedCmp.vue';
import HomeCmp from '@/components/pages/HomeCmp.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'HomeCmp',
        component: HomeCmp
    },
    { 
        path: '/password-generated',
        name: 'PasswordGenerated',
        component: PasswordGenerated
    }
];

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;