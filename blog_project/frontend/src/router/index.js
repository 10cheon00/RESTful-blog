import { createRouter, createWebHistory } from 'vue-router';

import AppPageNotFound from '/src/components/AppPageNotFound';
import ArticleRoute from '/src/router/articleRoute';
import ProfileRoute from '/src/router/profileRoute';


const routes = [
    ...ArticleRoute,
    ...ProfileRoute,
    {
        path: '/:pathMatch(.*)*',  // 그 외 모든 경로를 이곳에서 처리하게 된다.
        name: 'NotFound',
        props: true,
        component: AppPageNotFound
    },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
