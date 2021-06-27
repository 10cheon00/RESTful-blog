<template>
    <div v-if:="isLoaded" id="blog-article-detail">
        <router-link :to="{name: 'ArticleList'}">Back to Home</router-link>
        <hr>
        {{ article.title }} | {{ article.create_at }}
        <br>
        {{ article.content }}
        <hr>
        <div>
            <button v-on:click="DeleteArticle">
                Delete!    
            </button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import { ArticleRequestApi } from '/src/utils/ApiRequest'

    export default {
        name: 'blog-article',
        props: {
            articleId: Number,
        },
        data(){
            return {
                article: undefined,
            }
        },
        computed: {
            isLoaded(){
                return this.article != undefined;
            }
        },
        mounted() {
            let articleRequestApi = new ArticleRequestApi()
            articleRequestApi.Retrieve(this.articleId).then(
                response => {
                    this.article = response.data
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        },
        methods: {
            DeleteArticle(){
                let articleRequestApi = new ArticleRequestApi()
                articleRequestApi.Delete(this.articleId).then(
                    response => {
                        this.$router.push(
                            {name: 'ArticleList'}
                        );
                    }
                ).catch(
                    error => {
                        console.log(error.response); 
                    }
                )
            }
        }
    }
</script>
<style>
    button{
        background-color:#ffcccc;
    }
</style>