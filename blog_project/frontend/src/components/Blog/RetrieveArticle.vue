<template>
    <div v-if:="isLoaded" id="blog-article-detail">
        <router-link :to="{name: 'ListArticle'}">
            Back to Home
        </router-link>
        <hr>
        <div id="title">
            <div>
                {{ article.title }}
            </div>
            <div>
                created : {{ article.create_at }}
                <br/>
                last_modified : {{ article.last_modified_at }}
            </div>
        </div>
        <hr/>
        {{ article.content }}
        <hr>
        <button v-on:click="DeleteArticle">
            Delete!    
        </button>
        <button v-on:click="UpdateArticle">
            Update!    
        </button>
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
                )
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
                this.$router.push({
                    name: 'DeleteArticle',
                    params: {
                        articleId: this.articleId
                    }
                })
                
            }
        }
    }
</script>
<style scoped>
    #title{
        display: flex;
        justify-content: space-between;
    }
</style>