<template>
    <div v-if:="isLoaded" id="blog-article-detail">
        <router-link :to="{name: 'ListArticle'}">
            Back to Home
        </router-link>
        <hr>
        title : {{ article.title }}
        <br/>
        created : {{ article.create_at }}
        <br/>
        last_modified : {{ article.last_modified_at }}
        <br/>
        content : {{ article.content }}
        <hr>
        <div>
            <button v-on:click="DeleteArticle">
                Delete!    
            </button>
            <button v-on:click="UpdateArticle">
                Update!    
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
            this.RetrieveArticle()
        },
        methods: {
            RetrieveArticle() {
                this.$store.dispatch(
                    'RetrieveArticle', this.articleId
                ).catch(error => {
                    console.log(error);
                })
            },
            UpdateArticle(){
                this.$router.push({
                    name: 'UpdateArticle',
                    params: {
                        articleId: this.articleId
                    }
                })
            },
            DeleteArticle(){
                this.$store.dispatch(
                    'DestroyArticle', this.articleId
                ).then( response => {
                    this.$router.push({name: 'ListArticle'});
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