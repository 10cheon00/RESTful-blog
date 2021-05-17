<template>
    <div>
        <router-link to="../">Back to Home</router-link>
        <br>
        {{ article.title }} | {{ article.create_at }}
        <hr>
        {{ article.content }}
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data(){
            return {
                article: Object,
            }  
        },
        methods: {
            getArticle(){
                axios.get(
                    'http://rest-blog.run.goorm.io/api/article/'
                ).then(response => {
                    this.article = response.data.find(
                        x => x.id == this.$route.params.id
                    )
                })
            }
        },
        created(){
            this.getArticle();
        }
    }
</script>