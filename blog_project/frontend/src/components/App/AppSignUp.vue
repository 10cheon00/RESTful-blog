<template>
<div>
    <h1>
        SignUp    
    </h1>
    <input type="text" v-model="profile.username">
    <input type="text" v-model="profile.nickname">
    <input type="password" v-model="profile.password">
    <input type="password" v-model="profile.password_confirmation">
    <p>
        {{ error_msg }}
    </p>
    <button v-on:click="SignUp">
        Sign Up
    </button>
</div>
</template>
<script>
    import axios from 'axios'
    
    import tokenMixin from '/src/mixins/tokenMixin'

    export default{
        name: 'AppSignUp',
        mixins: [tokenMixin],
        data(){
            return{
                profile:{
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

                axios({
                    method: 'post',
                    url: this.profileSignUpUrl,
                    data: this.profile
                }).then(response => {
                    this.$router.push({name: 'SignIn'})
                }).catch(error => {
                    console.log(error.response)
                })
            },
            IsPasswordEquals(){
                return this.profile.password == this.profile.password_confirmation
            }
        }
    }
</script>