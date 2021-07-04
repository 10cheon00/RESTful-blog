import { createRouter, createWebHistory } from 'vue-router';

import AppPageNotFound from '/src/components/AppPageNotFound';
import SignIn from '/src/components/Profile/SignIn';
import SignUp from '/src/components/Profile/SignUp';
import SignOut from '/src/components/Profile/SignOut';

import ArticleList from '/src/components/Blog/ArticleList';
import ArticleDetail from '/src/components/Blog/ArticleDetail';
import CreateArticle from '/src/components/Blog/CreateArticle';


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
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/signout',
        name: 'SignOut',
        component: SignOut,
    },
    
    {
        path: '/article',
        name: 'ArticleList',
        component: ArticleList,
    },
    {
        path: '/article/:articleId(\\d+)',  // regex를 이용해 오직 숫자만 걸러낸다.
        name: 'ArticleDetail',
        props: CastArticleIdStringToNumber, 
        component: ArticleDetail,
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
        component: AppPageNotFound
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;