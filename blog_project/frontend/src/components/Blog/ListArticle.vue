<template>
<div>
    <div id="blog-create-article">
        <router-link :to="{name: 'CreateArticle'}">
            Create Article
        </router-link>
    </div>
    <hr>
    <div id="blog-article-list" >
        <div v-for="article in articleList" 
             :key="article.id">
            <router-link :to="{
              name: 'RetrieveArticle',
              params: {articleId: `${article.id}`}}
              ">
                {{ article.title }}
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
    import { mapGetters, mapState } from 'vuex'

    export default {
        data(){
            return {
                isVerified: false
            }
        },
        computed:{
            ...mapGetters({
                articleList: 'GetArticleList'
            }),
        },
        created(){
            this.$store.dispatch('ListArticle')
            this.$store.dispatch('VerifyToken')
        },
    }
</script>
