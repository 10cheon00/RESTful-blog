<template>
<div id='nav'>
    <router-link :to="{name: 'ArticleList'}">Blog</router-link>
    <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
    <router-link :to="{name: 'SignIn'}">Sign In</router-link>
</div>
</template>
<style>
    #nav{
        margin:3px
    }
</style>