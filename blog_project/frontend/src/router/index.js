import { createRouter, createWebHistory } from 'vue-router';
import Blog from '/src/components/Blog.vue';
import NotFound from '/src/components/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Blog
    },
    {
        path: '/NotFound',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/article/:articleId',
        name: 'ArticleDetail',
        props: true,  // 이 옵션으로 선택한 article의 id가 Blog의 props에 저장된다.
        component: Blog,
    },
    {
        path: '/:patchMatch(.*)*', 
        redirect: '/NotFound'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;