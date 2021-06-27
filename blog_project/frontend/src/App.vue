<template>
    <div>
        <app-navigation></app-navigation>
        <div id="blog">
            <h3>
                My blog!
            </h3>
            <hr>
            <router-view id="router-view"/>
        </div>
    </div>
</template>

<script>
import AppNavigation from '/src/components/AppNavigation'

export default{
    name: 'App',
    components: {
        AppNavigation
    },
}
</script>
    
<style>
    body{
        background-color:#C0C0C0;
    }
    #app{
        padding:2rem;
        background-color:#FFFFFF;
    }
</style>
