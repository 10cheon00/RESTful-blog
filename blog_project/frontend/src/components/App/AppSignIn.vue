<template>
<div>
    <h1>
        Sign In
    </h1>
    <div>
        <input type="text" v-model="profile.username">
        <input type="password" v-model="profile.password">
    </div>
    <button v-on:click="SignIn">
        Sign In
    </button>
    <div>
        {{ error_msg }}
    </div>
</div>
</template>

<script>
    import axios from 'axios'

    import tokenMixin from '/src/mixins/tokenMixin';

    export default{
        name: 'AppSignIn',
        mixins: [tokenMixin],
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
                this.ObtainToken(
                    this.profile,
                    (response) => {
                        this.SaveTokens(response.data)
                        this.$router.push({name: 'ArticleList'})
                    },
                    (error) => {
                        if(error.response.status == 401){
                            this.error_msg = '로그인 정보가 맞지 않습니다.'
                        }
                    }
                )
            }
            
        }
    }

</script>