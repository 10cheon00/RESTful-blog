<template>
<div>
    Sign Out ...
</div>
</template>
<script>
export default{
    name: 'Sign Out',
    mounted(){
        this.$store.commit('TokenStorage/ClearTokenData')
        this.$router.push({name: 'ListArticle'})
    }
}
</script>