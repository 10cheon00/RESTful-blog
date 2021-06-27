<template>
<div id='nav'>
    <router-link :to="{name: 'ArticleList'}">Blog</router-link>
    <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
    <router-link :to="{name: 'SignIn'}">Sign In</router-link>
</div>
</template>

<script>
    export default{
        name: 'AppNavigation'
    }
</script>

<style scoped>
    #nav{
        margin:3px;
        background-color: #eeeeee;
    }
    router-link{
        margin:3px
    }
</style>