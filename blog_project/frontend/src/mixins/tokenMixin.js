export default {
    computed:{
        IsTokenVerified() {
            if(this.$store.state.TokenStorage.verified){
                return true
            }
            return false
        },
    }
}