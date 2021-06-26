<template>
    <div id="input">
        <div>
            <input v-model="article.title" placeholder="제목">
        </div>
        <div>
            <textarea v-model="article.content" placeholder="내용"/>
        </div>
        <button v-on:click="createArticle">
            저장
        </button>
        <div>
            <p>{{ errorMsg }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
    
import articleUrlMixin from '/src/mixins/articleUrlMixin';
import tokenMixin from '/src/mixins/tokenMixin';

export default{
    mixins: [articleUrlMixin, tokenMixin],
    data(){
        return{
            article: {
                title: "",
                content: "",
            },
            errorMsg: "",
        }
    },
    methods: {
        createArticle(){
            if(this.IsEmptyArticle()){
                this.ShowErrorMsg()
                return
            }
            // 생성하려고 하면 인증이 안된다고 뜬다.. 왜일까
            const token = this.GetAccessTokenFromLocalStorage()
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }
            axios({
                method: 'post', //you can set what request you want to be
                url: this.ArticleAPIUrl(),
                data: this.article,
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(response => {
                this.$router.push({name: 'ArticleList'});
            }).catch(
                error => {
                    console.log(error.response)
                }
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
