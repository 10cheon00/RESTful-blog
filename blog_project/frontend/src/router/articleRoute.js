import ListArticle from '/src/components/Blog/ListArticle';
import RetrieveArticle from '/src/components/Blog/RetrieveArticle';
import CreateArticle from '/src/components/Blog/CreateArticle';
import UpdateArticle from '/src/components/Blog/UpdateArticle';
import DeleteArticle from '/src/components/Blog/DeleteArticle';
import store from '/src/store/store'


function CastArticleIdStringToNumber(route){
    return {
        articleId: Number(route.params.articleId)
    }
}

async function ProcedeNavigationIfAuthorIdEqualToUserId(to, from, next){
    const articleId = to.params.articleId

    await store.dispatch('RetrieveArticle', articleId)

    const authorId = store.getters.GetArticleAuthor
    const userId = store.state.TokenStorage.userData.id
    if(authorId != userId){
        alert('권한이 없습니다.')
        next({
            name: 'RetrieveArticle',
            params: {articleId: articleId}
        })
    }
    else{
        next()
    }
}

const ArticleRoute = [
    {
        path: '/article',
        name: 'ListArticle',
        component: ListArticle,
    },
    {
        path: '/article/create',
        name: 'CreateArticle',
        component: CreateArticle,
        meta: {
            requiresAuthentication: true
        }
    },
    {
        path: '/article/:articleId(\\d+)',  // regex를 이용해 오직 숫자만 걸러낸다.
        name: 'RetrieveArticle',
        props: CastArticleIdStringToNumber, 
        component: RetrieveArticle,
    },
    {
        path: '/article/:articleId(\\d+)/update',
        name: 'UpdateArticle',
        props: CastArticleIdStringToNumber,
        component: UpdateArticle,
        meta: {
            requiresAuthentication: true
        },
        beforeEnter: ProcedeNavigationIfAuthorIdEqualToUserId
    },
    {
        path: '/article/:articleId(\\d+)/delete',
        name: 'DeleteArticle',
        props: CastArticleIdStringToNumber,
        component: DeleteArticle,
        meta: {
            requiresAuthentication: true
        },
        beforeEnter: ProcedeNavigationIfAuthorIdEqualToUserId
    },
            
]

export default ArticleRoute
