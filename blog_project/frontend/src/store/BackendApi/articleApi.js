import axiosInstance from '/src/store/BackendApi/axiosWrapper'
import router from '/src/router/index'


const articleUrl = {
    GetArticleListCreateUrl: () => { 
        return 'articles/'
    },
    GetArticleRetrieveUpdateDestroyUrl: (articleId) => {
        return 'articles/' + articleId + '/'
    },
}

const ArticleApi = {
    state:{
        articleList: [],
        article: undefined
    },
    getters:{
        GetArticleList(state){
            return state.articleList
        },
        GetArticle(state){
            return state.article
        }
    },
    mutations: {
        SetArticleList(state, articleList) {
            state.articleList = articleList
        },
        SetArticle(state, article){
            state.article = article
        }
    },
    actions: {
        ListArticle({ commit }){
            axiosInstance({
                method: 'get',
                url: articleUrl.GetArticleListCreateUrl()
            }).then( response => {
                // 같은 모듈 내에 있는 mutation은 따로 경로 지정없이 그냥 호출할 수 있다. 
                commit('SetArticleList', response.data)
            })
        },
        RetrieveArticle({ commit }, articleId){
            commit('SetArticle', undefined)
            axiosInstance({
                method: 'get',
                url: articleUrl.GetArticleRetrieveUpdateDestroyUrl(articleId)
            }).then( response => {
                commit('SetArticle', response.data)
            })
        },
        CreateArticle({ commit, rootGetters, dispatch }, article){
            axiosInstance({
                method: 'post',
                url: articleUrl.GetArticleListCreateUrl(),
                headers: rootGetters['TokenStorage/GetHeaderForAuthorization'],
                data: article
            }).then( response => {
                router.push({name: 'ListArticle'});
            }).catch( error => {
                alert('로그인이 필요합니다.')
                router.push({name: 'SignIn'})
            })
        },
        UpdateArticle({ commit, rootGetters }, data){
            axiosInstance({
                method: 'put',
                url: articleUrl.GetArticleRetrieveUpdateDestroyUrl(data.id),
                headers: rootGetters['TokenStorage/GetHeaderForAuthorization'],
                data: data.article
            }).then( response => {
                router.push({
                    name: 'RetrieveArticle',
                    params: {articleId: data.id} 
                });
            }).catch( error => {
                alert('로그인이 필요합니다.')
                router.push({name: 'SignIn'})
            })
        },
        DestroyArticle({ commit, rootGetters, dispatch }, articleId){
            axiosInstance({
                method: 'delete',
                url: articleUrl.GetArticleRetrieveUpdateDestroyUrl(articleId),
                headers: rootGetters['TokenStorage/GetHeaderForAuthorization'],
            }).then( response => {
                router.push({name: 'ListArticle'})
            }).catch( error => {
                alert('로그인이 필요합니다.')
                router.push({name: 'SignIn'})
            })
        },
    }
}

export default ArticleApi
