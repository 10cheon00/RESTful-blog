<template>
    <div id="blog-article-list">
        <div v-for="article in articleList" :key="article.id">
            <router-link :to="`/${article.id}`">
                {{ article.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: 'blog-article-list',
        props:{
            articleList: Array,
        },
    }
</script>