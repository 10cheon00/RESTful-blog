<template>
<div>
    <div id='nav'>
        <router-link :to="{name: 'ListArticle'}">Blog</router-link>
        <div v-if="IsTokenVerified">
            <router-link :to="{name: 'SignOut'}">Sign Out</router-link>
        </div>
        <div v-else>
            <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
            <router-link :to="{name: 'SignIn'}">Sign In</router-link>
        </div>
    </div>
</div>

</template>

<script>
    import { mapState } from 'vuex'

    export default{
        name: 'AppNavigation',
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
