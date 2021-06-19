<template>
    <div id="blog">
        <app-nav/>
        <h3>
            My blog!
        </h3>
        <hr>
        <router-view id="app"/>
    </div>
</template>

<script>
import AppNav from '/src/components/AppNav'
export default{
    components: {
        AppNav
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
