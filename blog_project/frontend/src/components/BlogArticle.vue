<template>
    <div id="blog-article-detail">
        <div v-if="isLoadible">
            <router-link to="/">Back to Home</router-link>
            <br>
            {{ article.title }} | {{ article.create_at }}
            <hr>
            {{ article.content }}

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name: 'blog-article',
        props:{
            article: Object,
        },
        computed:{
            isLoadible(){
                return (this.article !== undefined)?true:false;
            }
        },
    }
</script>