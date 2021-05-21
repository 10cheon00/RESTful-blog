<template>
<div id="blog">
    <h3>
        My blog!
    </h3>
    <blog-article-list :articleList="articleList"/>
    <blog-article :article="article"/>
</div>
</template>
<script>
    import axios from 'axios';
    
    import BlogArticle from '/src/components/BlogArticle.vue';
    import BlogArticleList from '/src/components/BlogArticleList.vue';
    
    export default {
        data() {
            return {
                article: undefined,
                articleList: [],
            }
        },
        props:{
            articleId: String,
        },
        components:{
            BlogArticle,
            BlogArticleList,
        },
        mounted(){
            this.loadArticleListIfArticleIdGiven();
            this.loadArticleById();
        },
        watch: {
            articleId(){
                this.loadArticleListIfArticleIdGiven();
                this.loadArticleById();
            }
        },
        methods: {
            loadArticleListIfArticleIdGiven(){
                if(this.isArticleIdUndefined()){
                    this.loadArticleList();
                }
                else{
                    this.clearArticleList();
                }
            },
            loadArticleList(){
                axios.get(this.articleAPIUrl()).then(response => {
                    this.articleList = response.data;
                });
            },
            clearArticleList(){
                this.articleList = [];
            },
            loadArticleById(){
                if(!this.isArticleIdUndefined()){
                    axios.get(
                        this.articleDetailUrl(this.articleId)
                    ).then(response => {
                        this.article = response.data;
                    }).catch({
                        // Redirect 404 page.
                    })
                }
                else{
                    this.article = undefined;
                }
            },
            isArticleIdUndefined(){
                return this.articleId == undefined;
            }
        }
    }
</script>

<style>
</style>