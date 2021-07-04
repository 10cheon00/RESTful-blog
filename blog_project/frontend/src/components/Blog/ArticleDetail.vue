<template>
    <div v-if:="isLoaded" id="blog-article-detail">
        <router-link :to="{name: 'ArticleList'}">
            Back to Home
        </router-link>
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
    import { mapGetters } from 'vuex'
    
    export default {
        name: 'blog-article',
        props: {
            articleId: Number,
        },
        computed: {
            isLoaded(){
                return this.article != undefined;
            },
            ...mapGetters({
                article: 'GetArticle'
            }),
        },
        mounted() {
            this.GetArticleDetail(this.articleId)
        },
        methods: {
            GetArticleDetail(articleId) {
                this.$store.dispatch(
                    'RetrieveArticle', this.articleId
                ).catch(error => {
                    console.log(error);
                })
            },
            DeleteArticle(){
                this.$store.dispatch(
                    'DestroyArticle', this.articleId
                ).then( response => {
                    this.$router.push({name: 'ArticleList'})
                })
            }
        }
    }
</script>
<style>
    button{
        background-color:#ffcccc;
    }
</style>