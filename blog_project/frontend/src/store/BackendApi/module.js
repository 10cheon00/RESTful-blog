import ArticleApi from '/src/store/BackendApi/articleApi'
import ProfileApi from '/src/store/BackendApi/profileApi'


const BackendApi = {
    modules: {
        ProfileApi,
        ArticleApi,
    },
}

export default BackendApi
