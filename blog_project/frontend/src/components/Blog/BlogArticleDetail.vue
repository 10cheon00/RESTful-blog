<template>
    <div v-if:="isLoaded" id="blog-article-detail">
        <router-link :to="{name: 'BlogArticleList'}">Back to Home</router-link>
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

    import articleUrlMixin from '/src/mixins/articleUrlMixin'
    import tokenMixin from '/src/mixins/tokenMixin'

    export default {
        mixins:[articleUrlMixin, tokenMixin],
        name: 'blog-article',
        props:{
            articleId: Number,
        },
        data(){
            return {
                article: undefined,
            }
        },
        computed:{
            isLoaded(){
                return this.article != undefined;
            }
        },
        mounted(){
            axios({
                method: 'get',
                url: this.ArticleRetrieveUpdateDeleteUrl(this.articleId),
            }).then(response => {
                this.article = response.data;
            }).catch(error => {
                console.log(error);
            })
        },
        methods: {
            DeleteArticle(){
                const token = this.GetAccessTokenFromLocalStorage()
                axios({
                    method: 'delete',
                    url: this.ArticleRetrieveUpdateDeleteUrl(this.articleId),
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {
                    this.$router.push(
                        {name: 'BlogArticleList'}
                    );
                }).catch(error => {
                    console.log(error.response); 
                });
            }
        }
    }
</script>
<style>
    button{
        background-color:#ffcccc;
    }
</style>