<template>
    <div>
        {{ title }} | {{ create_at }}
        <br>
        {{ content }}
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
                type: Date,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
        },
    }
</script>
<style scoped>
    div {
        display: flex;
        min-height: 100px;
        padding: 10px;
        background-color: beige;
        border: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 1em;
        margin: 5px;
    }
</style>