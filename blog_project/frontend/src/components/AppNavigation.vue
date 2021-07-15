<template>
<div>
    <div id='nav'>
        <router-link :to="{name: 'ListArticle'}">Blog</router-link>
        <router-link :to="{name: 'SignOut'}">Sign Out</router-link>
        <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
        <router-link :to="{name: 'SignIn'}">Sign In</router-link>
        <button v-on:click="Clear">
            Remove Token
        </button>
    </div>
</div>

</template>

<script>
    import { mapState } from 'vuex'

    export default{
        name: 'AppNavigation',
        methods: {
            Clear(){
                this.$store.commit('TokenStorage/ClearTokenData')
            }
        }
    }
</script>

<style scoped>
    #nav{
        display:flex;
        justify-content: center;
        margin:3px;
        background-color: #eeeeee;
    }
    router-link{
        padding:3px
    }
</style>
