<template>
<div>
    <div id='nav'>
        <router-link :to="{name: 'ListArticle'}">Blog</router-link>
        <div v-if="hasNotToken">
            <router-link :to="{name: 'SignUp'}">Sign Up</router-link>
            <router-link :to="{name: 'SignIn'}">Sign In</router-link>
        </div>
        <div v-else>
            <router-link :to="{name: 'SignOut'}">Sign Out</router-link>
        </div>
    </div>
</div>

</template>

<script>
    export default{
        name: 'AppNavigation',
        computed: {
            hasNotToken(){
                return this.$store.getters['TokenStorage/HasTokenKey'] == false
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
