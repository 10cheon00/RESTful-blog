import { createRouter, createWebHistory } from 'vue-router';
import Blog from '/src/components/Blog.vue';
import BlogArticle from '/src/components/BlogArticle.vue';
import CreateArticle from '/src/components/CreateArticle.vue';
import NotFound from '/src/components/NotFound.vue';
import SignIn from '/src/components/SignIn';
import SignUp from '/src/components/SignUp';


function CastArticleIdStringToNumber(route){
    return {
        articleId: Number(route.params.articleId)
    };
}

const routes = [
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
        meta: { unauthorized: true}
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
        meta: { unauthorized: true}
    },
    {
        path: '/article',
        name: 'ArticleList',
        component: Blog,
        meta: { unauthorized: true}
    },
    {
        path: '/article/:articleId(\\d+)',  // regex를 이용해 오직 숫자만 걸러낸다.
        name: 'ArticleDetail',
        props: CastArticleIdStringToNumber,  // 이 옵션으로 선택한 article의 id가 Blog의 props에 저장된다.
        component: BlogArticle,
    },
    {
        path: '/article/create',
        name: 'CreateArticle',
        component: CreateArticle,
    },

    {
        path: '/:pathMatch(.*)*',  // 14번째 줄과 똑같은 맥락으로, 그 외 모든 경로를 이곳에서 처리하게 된다.
        redirect: '/NotFound'  // NotFound로 넘겨진다.
    },
    {
        path: '/NotFound',
        name: 'NotFound',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;