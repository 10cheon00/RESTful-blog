import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../components/Blog.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Blog
    },
    {
        path: '/:articleId',
        name: 'ArticleDetail',
        props: true,  // 이 옵션으로 선택한 article의 id가 Blog의 props에 저장된다.
        component: Blog,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;