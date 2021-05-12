<template>
    <div id="app">
        <h2>My posts</h2>
        <h2>Add a New Post</h2>
        <form @submit.prevent="addPost">
                <input v-model="newPostTitle" placeholder="Post Title..."/>
                <textarea v-model="newPostContent" placeholder="Post Content..."/>
                <button>Add Post</button>
        </form>
        <div class="posts">
            <post
                v-for="(post, index) in posts" 
                :key="index"
                v-bind="post"
                v-on:deletePost="deletePost(post)"
            />
        </div>
    </div>
</template>

<script>
    // npm install --save axios

    // CORS issue
    // https://oen-blog.tistory.com/46

    // TODO 
    // cors에 대해 이해하기.

    // es6. 모듈 갖고오기.
    import post from './components/post';
    
    // axios는 비동기 방식 http 통신 라이브러리. ajax와 비슷?
    // get, post, put, delete같이 http 메소드를 호출할 수 있음.
    import axios from 'axios';

    // es6. 모듈 내에서 개체를 한 개만 갖고 있다고 알려줌. 
    // import {modules} from <path>인데, 
    // export에 default를 붙여주고 그것만 export하면,
    // import module from <path>로, 이해하기 더 쉬워진다.
    export default { 
        name: 'App',
        components: {
            // import한 컴포넌트. 여기다 등록할 수 있다.
            // 컴포넌트 명명법
            // 영문 소문자만 사용
            // 하이픈 이용(여러 단어를 하이픈으로 연결해 사용)
            post, 
        },
        data() { // 이 컴포넌트의 속성.
            return {
                posts: [],
                newPostTitle: '',
                newPostContent: '',
            };
        },
        methods: { // 이 컴포넌트의 메소드.
            loadposts: function () {
                axios.get( 
                    'http://rest-blog.run.goorm.io/api/post/'
                ).then((response) => {
                    this.posts = response.data;
                });
            },
            addPost: function () {
                axios.post(
                    'http://rest-blog.run.goorm.io/api/post/', 
                    {
                        title: this.newPostTitle,
                        content: this.newPostContent,
                    }
                ).then((response) => {
                    this.newPost = '';
                    this.posts.push(response.data);
                    this.loadposts();
                });
            },
            deletePost: function(post){
                console.log(post);
                axios.delete(post.url).then(response => {
                    this.loadposts();
                    return response;
                });
            }
        },
        created() { // 초기화에 사용.
            this.loadposts();
        },
        mounted() { // DOM 조작에 사용.
            
        }
    };
</script>