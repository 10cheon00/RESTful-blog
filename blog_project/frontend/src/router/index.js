import { createRouter, createWebHistory } from 'vue-router';

import AppPageNotFound from '/src/components/App/AppPageNotFound';
import AppSignIn from '/src/components/App/AppSignIn';
import AppSignUp from '/src/components/App/AppSignUp';
import BlogArticleList from '/src/components/Blog/BlogArticleList';
import BlogArticleDetail from '/src/components/Blog/BlogArticleDetail';
import BlogCreateArticle from '/src/components/Blog/BlogCreateArticle';


function CastArticleIdStringToNumber(route){
    return {
        articleId: Number(route.params.articleId)
    };
}

const routes = [
    {
        path: '/signup',
        name: 'AppSignUp',
        component: AppSignUp,
        meta: { unauthorized: true}
    },
    {
        path: '/signin',
        name: 'AppSignIn',
        component: AppSignIn,
        meta: { unauthorized: true}
    },
    {
        path: '/article',
        name: 'BlogArticleList',
        component: BlogArticleList,
        meta: { unauthorized: true}
    },
    {
        path: '/article/:articleId(\\d+)',  // regex를 이용해 오직 숫자만 걸러낸다.
        name: 'BlogArticleDetail',
        props: CastArticleIdStringToNumber,  // 이 옵션으로 선택한 article의 id가 Blog의 props에 저장된다.
        component: BlogArticleDetail,
    },
    {
        path: '/article/create',
        name: 'BlogCreateArticle',
        component: BlogCreateArticle,
    },

    {
        path: '/:pathMatch(.*)*',  // 14번째 줄과 똑같은 맥락으로, 그 외 모든 경로를 이곳에서 처리하게 된다.
        redirect: '/NotFound'  // NotFound로 넘겨진다.
    },
    {
        path: '/NotFound',
        name: 'AppNotFound',
        component: AppPageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;