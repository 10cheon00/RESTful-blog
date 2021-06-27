<template>
<div>
    <h1>
        SignUp    
    </h1>
    <form>
        <input type="text" v-model="profile.username">
        <input type="text" v-model="profile.nickname">
        <input type="password" v-model="profile.password">
        <input type="password" v-model="profile.password_confirmation">
    </form>
    <p>
        {{ error_msg }}
    </p>
    <button v-on:click="SignUp">
        Sign Up
    </button>
</div>
</template>
<script>
    import { ProfileRequestApi } from '/src/utils/ApiRequest'

    export default{
        name: 'SignUp',
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
                else{
                    this.error_msg = ''
                }

                let profileRequestApi = new ProfileRequestApi()
                profileRequestApi.SignUp(this.profile).then(
                    response => {
                        this.$router.push({name: 'SignIn'})
                    }
                )
            },
            IsPasswordEquals(){
                return this.profile.password == this.profile.password_confirmation
            }
        }
    }
</script>