import ListArticle from '/src/components/Blog/ListArticle';
import RetrieveArticle from '/src/components/Blog/RetrieveArticle';
import CreateArticle from '/src/components/Blog/CreateArticle';
import UpdateArticle from '/src/components/Blog/UpdateArticle';
import DeleteArticle from '/src/components/Blog/DeleteArticle';


function CastArticleIdStringToNumber(route){
    return {
        articleId: Number(route.params.articleId)
    };
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
        }
    },
    {
        path: '/article/:articleId(\\d+)/delete',
        name: 'DeleteArticle',
        props: CastArticleIdStringToNumber,
        component: DeleteArticle,
        meta: {
            requiresAuthentication: true
        }
    },
            
]

export default ArticleRoute
