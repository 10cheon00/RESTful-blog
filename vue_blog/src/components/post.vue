<template>
    <div>
        {{ title }}<br>
        {{ create_at }}<br>
        {{ content }}<br>
        <button v-on:click="$emit('deletePost', 'this')">Delete</button>
    </div>
</template>
<script>
    export default {
        name: "post",
        props: { // 이 컴포넌트의 속성이라고 보면 된다.
            title: {
                type: String,
                required: true,
            },
            create_at: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
        },
        methods: {
        }
    }
</script>
<style scoped>
    div{
        border: 1px;
    }
</style>