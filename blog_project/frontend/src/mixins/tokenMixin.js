
import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState([
            'isVerified'
        ])
    },
    methods:{
        NavigateToSignInPageIfNotAuthenticated(){
            this.$store.dispatch('VerifyToken').catch(errorMsg => {
                this.$router.push({name: 'SignIn'})
            })
        },
    }
}
