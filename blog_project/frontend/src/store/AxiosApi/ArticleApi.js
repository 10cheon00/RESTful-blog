import axios from 'axios'


const articleApiUrl = 'http://rest-blog.run.goorm.io/api/articles/'

const articleUrl = {
    GetArticleListCreateUrl: () => { 
        return articleApiUrl
    },
    GetArticleRetrieveUpdateDestroyUrl: (articleId) => {
        return articleApiUrl + articleId
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
            return axios({
                method: 'get',
                url: articleUrl.GetArticleListCreateUrl()
            }).then( response => {
                // 같은 모듈 내에 있는 mutation은 따로 경로 지정없이 그냥 호출할 수 있다. 
                commit('SetArticleList', response.data) 
            })
        },
        RetrieveArticle({ commit }, articleId){
            return axios({
                method: 'get',
                url: articleUrl.GetArticleRetrieveUpdateDestroyUrl(articleId)
            }).then( response => {
                commit('SetArticle', response.data)
            })
        },
        CreateArticle({ commit, rootGetters }, article){
            return axios({
                method: 'post',
                url: articleUrl.GetArticleListCreateUrl(),
                headers: rootGetters['TokenStorage/GetHeaderForAuthorization'],
                data: article
            })
        },
        DestroyArticle({ commit, rootGetters }, articleId){
            return axios({
                method: 'delete',
                url: articleUrl.GetArticleRetrieveUpdateDestroyUrl(articleId),
                headers: rootGetters['TokenStorage/GetHeaderForAuthorization'],
            })
        },
    }
}

export default ArticleApi
