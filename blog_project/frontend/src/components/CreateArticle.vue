<template>
    <div id="input">
        <div>
            <input v-model="title" placeholder="제목">
        </div>
        <div>
            <textarea v-model="content" placeholder="내용"/>
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

export default{
    mixins: [articleUrlMixin],
    data(){
        return{
            title: "",
            content: "",
            errorMsg: "",
        }
    },
    methods: {
        createArticle(){
            if(this.IsEmptyArticle()){
                this.ShowErrorMsg()
                return
            }
            axios.post(
                this.ArticleListCreateUrl(), {
                    title: this.title,
                    content: this.content,
                }
            ).then(response => {
                this.$router.push(
                    {name: 'ArticleList'}
                );
            }).catch(
                function(error){
                    console.log('error -> ' + error)
                }
            )
        },
        IsEmptyArticle(){
            return this.title.length + this.content.length == 0
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
