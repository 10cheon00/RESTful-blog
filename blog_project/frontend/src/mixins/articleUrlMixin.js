

export default {
    data() {
        return {
            api_url: 'http://rest-blog.run.goorm.io/api/'
        }
    },
    methods: {
        ArticleAPIUrl(){
            return this.api_url + 'articles/'
        },
        ArticleRetrieveUpdateDeleteUrl(articleId){
            return this.ArticleAPIUrl() + articleId;
        },
    }
};

