<template>
    <div v-if:="isLoaded">
        <div id="input">
            <div>
                <input v-model="article.title" placeholder="제목">
            </div>
            <div>
                <textarea v-model="article.content" placeholder="내용"/>
            </div>
            <button v-on:click="UpdateArticle">
                수정
            </button>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    
    export default {
        props:{
            articleId: Number,
        },
        computed:{
            isLoaded(){
                return this.article != undefined;
            },
            ...mapGetters({
                article: 'GetArticle'
            }),
        },
        mounted(){
            this.RetrieveArticle()
        },
        methods: {
            RetrieveArticle(){
                this.$store.dispatch(
                    'RetrieveArticle', this.articleId
                ).catch( error => {
                    console.log(error)
                })
            },
            UpdateArticle(){
                this.$store.dispatch(
                    'UpdateArticle', {
                        article: this.article,
                        id: this.articleId
                    }
                ).then( response => {
                    this.$router.push({
                        name: 'RetrieveArticle',
                        params: {articleId: this.articleId} 
                    });
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
<style>
    input{
        width:80%;
        margin-bottom:3px;
        margin-left:3px;
    }
    textarea{
        width:80%;
        height:500px;
        margin-left:3px;
    }
</style>
