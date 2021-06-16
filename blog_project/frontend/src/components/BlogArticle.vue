<template>
    <div v-if:="isLoaded" id="blog-article-detail">
        <router-link :to="{name: 'ArticleList'}">Back to Home</router-link>
        <hr>
        {{ article.title }} | {{ article.create_at }}
        <br>
        {{ article.content }}
    </div>
</template>

<script>
    import axios from 'axios';
    import articleUrlMixin from '/src/mixins/articleUrlMixin';

    export default {
        mixins:[articleUrlMixin],
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
            axios.get(
                this.ArticleRetrieveUpdateDestroyUrl(this.articleId)
            ).then(response => {
                this.article = response.data;
            }).catch(error => {
                console.log(error);
            })
        }
    }
</script>