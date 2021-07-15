import { createRouter, createWebHistory } from 'vue-router';

import store from '/src/store/store.js'
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
})

router.beforeEach(async (to, from, next) => {
    if(to.meta.requiresAuthentication){
        try{
            const response = await store.dispatch('VerifyToken')
            if(response.status == 200){
                next()
            }
            else if(response.status >= 400){
                next(false)
            }
            else{
                alert('로그인이 필요합니다.')
                next('/SignIn')
            }
        }
        catch(e){
            alert('로그인이 필요합니다.')
            next('/SignIn')
        }
    }
    else{
        next()
    }
})

export default router;
