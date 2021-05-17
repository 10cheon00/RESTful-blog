<template>
<div>
    <h3>
        My blog!
    </h3>
    <div v-for="article in articles" :key="article.id">
        <router-link :to="`/${article.id}`">
            {{ article.title }}
        </router-link>
    </div>
</div>
</template>
<script>

    import axios from 'axios';
    
    export default {
        data() {
            return {
                articles: []
            }
        },
        components:{
        },
        methods: {
            getArticles(){
                axios.get(
                    'http://rest-blog.run.goorm.io/api/article'
                ).then(response => {
                    this.articles = response.data;
                })
            }
        },
        created() {
            this.getArticles()
        }
    }
</script>

<style>
</style>
