<template>
    <div>
        <h3>
            404 Not Found
        </h3>
        <small>
            Not matched existing url, {{ getUrl }}.
        </small>
    </div>
</template>

<script>
export default{
    name: 'AppPageNotFound',
    props:{
        pathMatch: Array
    },
    computed:{
        getUrl(){
            let url = ''
            try{
                this.pathMatch.forEach((path) => {
                    url += path + '/'
                })
                return url
            }
            catch{
                return '/'
            }
        },
    }
}
</script>