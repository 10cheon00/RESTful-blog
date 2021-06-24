const apiUrl = 'http://rest-blog.run.goorm.io/api/'


export default {
    data() {
        return {
        }
    },
    methods: {
        ArticleAPIUrl(){
            return apiUrl + 'articles/'
        },
        ArticleRetrieveUpdateDeleteUrl(articleId){
            return this.ArticleAPIUrl() + articleId;
        },
    }
};

