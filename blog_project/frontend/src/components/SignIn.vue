<template>
<div>
    <h1>
        Sign In
    </h1>
    <input type="text" v-model="credentials.username">
    <input type="password" v-model="credentials.password">
    <button v-on:click="SignIn">
        Sign In
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
            SignIn(){
                axios.post(
                    'http://rest-blog.run.goorm.io/api/profiles/', 
                    this.credentials
                ).then(response => {
                    localStorage.setItem('jwt_access', response.data.access)
                    localStorage.setItem('jwt_refresh', response.data.refresh)
                    this.$router.push({name: 'ArticleList'})
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

</script>