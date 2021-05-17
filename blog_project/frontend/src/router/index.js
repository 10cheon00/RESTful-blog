import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../components/Blog.vue';
import BlogArticle from '../components/BlogArticle.vue';

const routes = [
    {
        path: '/',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/:id',
        name: 'BlogArticle',
        component: BlogArticle,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;