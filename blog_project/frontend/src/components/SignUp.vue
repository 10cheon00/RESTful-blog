<template>
<div>
    <h1>
        SignUp    
    </h1>
    <input type="text" v-model="credentials.username">
    <input type="password" v-model="credentials.password">
    <button v-on:click="SignUp">
        Sign Up
    </button>
</div>
</template>
<script>
    import axios from 'axios';

    export default{
        name: 'SignUp',
        data(){
            return{
                credentials:{
                    username: null,
                    password: null,
                    passwordConfirmation: null,
                }
            }
        },
        methods: {
            SignUp(){
                axios.post(
                    'http://rest-blog.run.goorm.io/api/profiles/', {
                        username: this.credentials.username,
                        password: this.credentials.password,
                    }
                ).then(response => {
                    this.$router.push({name: 'Login'})
                }).catch(error => {
                    console.log("failed")
                })
            }
        }
    }
</script>