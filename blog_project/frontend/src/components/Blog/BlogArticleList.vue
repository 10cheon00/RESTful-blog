<template>
<div>
    <div id="blog-create-article">
        <router-link :to="{name: 'BlogCreateArticle'}">
            Create Article
        </router-link>
    </div>
    <hr>
    <div id="blog-article-list">
        <div v-for="article in articleList" :key="article.id">
            <router-link :to="{
                              name: 'BlogArticleDetail',
                              params: {articleId: `${article.id}`}}
                              ">
                {{ article.title }}
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios';
    
    import articleUrlMixin from '/src/mixins/articleUrlMixin';
    
    export default {
        mixins: [articleUrlMixin],
        data() {
            return {
                articleList: [],
            }
        },
        props:{
        },
        components:{
        },
        mounted(){
            axios({
                method: 'get',
                url: this.ArticleAPIUrl()
            }).then(response => {
                this.articleList = response.data;
            }).catch(error => {
                console.log(error);
            })
        },
        watch: {
        },
        methods: {
        }
    }
</script>