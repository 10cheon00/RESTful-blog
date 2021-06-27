<template>
<div>
    <div id="blog-create-article">
        <router-link :to="{name: 'CreateArticle'}">
            Create Article
        </router-link>
    </div>
    <hr>
    <div id="blog-article-list">
        <div v-for="article in articleList" 
             :key="article.id">
            <router-link :to="{
                              name: 'ArticleDetail',
                              params: {articleId: `${article.id}`}}
                              ">
                {{ article.title }}
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios'
    
    import { ArticleRequestApi } from '/src/utils/ApiRequest'
    
    export default {
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
            let articleRequestApi = new ArticleRequestApi()
            articleRequestApi.List().then(
                response => {
                    this.articleList = response.data;
                }
            ).catch(error => {
                console.log(error);
            })
        },
        watch: {
        },
        methods: {
        }
    }
</script>