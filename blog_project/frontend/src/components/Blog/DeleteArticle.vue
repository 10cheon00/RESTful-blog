<template>
<div>
    <h3>
        정말 지우시겠습니까?         
    </h3>
    <button v-on:click="DeleteArticle">
        예
    </button>
    <button v-on:click="RetrieveArticle">
        아니오
    </button>
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
        created(){
            this.$store.dispatch('RetrieveArticle', this.articleId).then(response => {
                const authorId = this.$store.getters.GetArticleAuthor
                const userId = this.$store.state.TokenStorage.userData.id
                if(authorId != userId){
                    alert('권한이 없습니다.')
                    this.$router.push({
                        name: 'RetrieveArticle',
                        params: {articleId: this.articleId}
                    })                    
                }
            })
        },
        methods: {
            DeleteArticle(){
                this.$store.dispatch(
                    'DestroyArticle', this.articleId
                )
            },
            RetrieveArticle(){
                this.$router.push({
                    name: 'RetrieveArticle',
                    params: {articleId: this.articleId}
                })
            }
        }
    }
</script>
<style>
</style>
