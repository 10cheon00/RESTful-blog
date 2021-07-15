<template>
    <div id="input">
        <div>
            <input v-model="article.title" placeholder="제목">
        </div>
        <div>
            <textarea v-model="article.content" placeholder="내용"/>
        </div>
        <button v-on:click="CreateArticle">
            저장
        </button>
        <div>
            <p>{{ errorMsg }}</p>
        </div>
    </div>
</template>
<script>
    
    export default{
        data() {
            return{
                article: {
                    title: "",
                    content: "",
                },
                errorMsg: "",
            }
        },
        mounted(){
        },
        methods: {
            CreateArticle(){
                if(this.IsEmptyArticle()){
                    this.ShowErrorMsg()
                    return
                }

                this.$store.dispatch(
                    'CreateArticle', this.article
                )
            },
            IsEmptyArticle(){
                return this.article.title.length + this.article.content.length == 0
            },
            ShowErrorMsg(){
                this.errorMsg = "내용을 입력해주세요!"
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
