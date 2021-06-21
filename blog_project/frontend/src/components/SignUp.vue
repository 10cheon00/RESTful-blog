<template>
<div>
    <h1>
        SignUp    
    </h1>
    <input type="text" v-model="credentials.username">
    <input type="text" v-model="credentials.nickname">
    <input type="password" v-model="credentials.password">
    <input type="password" v-model="credentials.password_confirmation">
    <p>
        {{ error_msg }}
    </p>
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
                    nickname: null,
                    password: null,
                    password_confirmation: null,
                },
                error_msg: '',
            }
        },
        methods: {
            SignUp(){
                if(this.IsPasswordEquals() == false){
                    this.error_msg = '비밀번호가 같지 않습니다!'
                    return
                }
                    
                axios.post(
                    'http://rest-blog.run.goorm.io/api/profiles/signup/', 
                    this.credentials
                ).then(response => {
                    if(response.data.error){
                        console.log(response.data.error)
                    }
                    else{
                        this.$router.push({name: 'SignIn'})
                    }
                }).catch(error => {
                    console.log("failed")
                })
            },
            IsPasswordEquals(){
                return this.credentials.password == this.credentials.password_confirmation
            }
        }
    }
</script>