<template>
<div>
    <h1>
        SignUp    
    </h1>
    <form>
        <input type="text" autocomplete="username" v-model="profile.username">
        <input type="text" autocomplete="nickname" v-model="profile.nickname">
        <input type="password" autocomplete="new-password" v-model="profile.password">
        <input type="password" autocomplete="new-password" v-model="profile.password_confirmation">
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
        computed:{
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

                this.$store.dispatch(
                    'SignUp', this.profile
                ).then( response => {
                    this.$router.push({name: 'ArticleList'})
                })
            },
            IsPasswordEquals(){
                return this.profile.password == this.profile.password_confirmation
            }
        }
    }
</script>