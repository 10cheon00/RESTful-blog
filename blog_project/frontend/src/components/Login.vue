<template>
<div>
    <h1>
        Login
    </h1>
    <input type="text" v-model="credentials.username">
    <input type="password" v-model="credentials.password">
    <button v-on:click="Login">
        Login
    </button>
</div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                credentials: {
                    username: null,
                    password: null
                }
            }
        },
        methods:{
            Login(){
                axios.post(
                    'http://rest-blog.run.goorm.io/api/profiles/', {
                        username: this.credentials.username,
                        password: this.credentials.password,
                    }
                ).then(response => {
                    localStorage.setItem('jwt', response.data.token)
                    this.$router.push({name: 'ArticleList'})
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

</script>