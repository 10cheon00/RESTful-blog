<template>
<div>
    <h1>
        Sign In
    </h1>
    <form>
        <input type="text" autocomplete="username" v-model="profile.username">
        <input type="password" autocomplete="current-password" v-model="profile.password">
    </form>
    <button v-on:click="SignIn">
        Sign In
    </button>
    <div>
        {{ error_msg }}
    </div>
</div>
</template>

<script>
    export default{
        name: 'SignIn',
        data(){
            return {
                profile: {
                    username: null,
                    password: null
                },
                error_msg: ''
            }
        },
        mounted(){
            //TODO check application has token.
        },
        methods:{
            SignIn(){
                this.$store.dispatch(
                    'SignIn', this.profile
                ).then(response => {
                    this.$router.push({name: 'ListArticle'})
                }).catch(
                    error => {
                        console.dir(error)
                        if(error.response.status == 401){
                            this.error_msg = '일치하는 계정이 없습니다.'
                        }
                    }
                )
            },
        }
    }

</script>