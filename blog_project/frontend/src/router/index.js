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

router.beforeEach(async(to, from, next) => {    
    //Check route require authentication
    if(to.meta.requiresAuthentication){
        try{
            const response = await store.dispatch('VerifyToken')
            if(response.status == 200){
                next()
            }
            else{
                throw response
            }
        }
        catch(e){
            alert('권한이 없습니다. 로그인 페이지로 이동합니다.')
            next('/SignIn')
        }
    }
    else{
        next()
    }
})

export default router;
