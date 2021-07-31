import axiosInstance from '/src/store/BackendApi/axiosWrapper'
import router from '/src/router/index'


const articleUrl = {
    GetArticleListUrl: () => { 
        return 'articles/list/'
    },
    GetArticleCreateUrl: () => {
        return 'articles/create/'
    },
    GetArticleRetrieveUrl: (articleId) => { 
        return 'articles/retrieve/' + articleId + '/'
    },
    GetArticleUpdateUrl: (articleId) => {
        return 'articles/update/' + articleId + '/'
    },
    GetArticleDestroyUrl: (articleId) => {
        return 'articles/destroy/' + articleId + '/'
    }
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
        },
        GetArticleAuthor(state){
            return state.article.author
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
                url: articleUrl.GetArticleListUrl()
            }).then(response => {
                // 같은 모듈 내에 있는 mutation은 따로 경로 지정없이 그냥 호출할 수 있다. 
                commit('SetArticleList', response.data)
            })
        },
        RetrieveArticle({ commit }, articleId){
            commit('SetArticle', undefined)
            return new Promise((resolve, reject) => {
                axiosInstance({
                    method: 'get',
                    url: articleUrl.GetArticleRetrieveUrl(articleId)
                }).then(response => {
                    commit('SetArticle', response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error.response)
                })
            })
        },
        CreateArticle({ commit, rootGetters, dispatch }, article){
            article.author = rootGetters['TokenStorage/GetUserId']
            axiosInstance({
                method: 'post',
                url: articleUrl.GetArticleCreateUrl(),
                data: article
            }).then(response => {
                router.push({name: 'ListArticle'});
            }).catch(error => {
                console.dir(error.response)
                alert('로그인이 필요합니다.')
                router.push({name: 'SignIn'})
            })
        },
        UpdateArticle({ commit, rootGetters }, data){
            axiosInstance({
                method: 'put',
                url: articleUrl.GetArticleUpdateUrl(data.id),
                data: data.article
            }).then(response => {
                router.push({
                    name: 'RetrieveArticle',
                    params: {articleId: data.id} 
                });
            }).catch(error => {
                if(error.response.status == 403){
                    alert('권한이 없습니다.')
                    router.push({
                        name: 'RetrieveArticle',
                        params: {articleId: data.id} 
                    });
                }
                else{
                    alert('로그인이 필요합니다.')
                    router.push({name: 'SignIn'})
                }
            })
        },
        DestroyArticle({ commit, rootGetters, dispatch }, articleId){
            axiosInstance({
                method: 'delete',
                url: articleUrl.GetArticleDestroyUrl(articleId),
            }).then(response => {
                router.push({name: 'ListArticle'})
            }).catch(error => {
                if(error.response.status == 403){
                    alert('권한이 없습니다.')
                    router.push({
                        name: 'RetrieveArticle',
                        params: {articleId: articleId} 
                    });
                }
                else{
                    alert('로그인이 필요합니다.')
                    router.push({name: 'SignIn'})
                }
            })
        },
    }
}

export default ArticleApi
