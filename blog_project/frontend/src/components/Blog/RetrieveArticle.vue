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
                    this.$router.push({
                        name: 'ListArticle'
                    });
                }).catch(error => {
                    // TODO 
                    // headers에 토큰을 넘기기 때문에 인증을 거친 후 삭제 요청을 할 이유는 없다.(중복이므로)
                    // 그럼 인증이 안된 경우, 서버가 다운된 경우 등등을 어떻게 처리할 것인가?
                    if(error.response.status == 401){
                        alert('접근 권한이 없습니다.')
                        this.$router.push({name: 'SignIn'})
                    }
                    console.log(error)
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