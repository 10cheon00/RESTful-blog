<template>
    <div id="app">
        <h2>My posts</h2>
<!--[v-for]
python의 for item in list와 유사하다.
v-for="post in posts"로 할 수 있지만,
post대신에 (post, index)를 통해 index를 가져올 수 있다.

person: {
    age: 10,
    fullname: 'kim',
}
이렇게 되어있을때 v-for:"(value, name, index) in person"으로,
key, value와 index까지 얻을 수 있다. 
주의할 점은 python과 다르게 key, value가 아닌 value, key라는 것이다.

재사용, 순서 변경 등의 작업을 위해 각각의 element에게 key를 줄 수 있다.
-->

<!--[v-bind]
속성 또는 컴포넌트의 props을 할당할 수 있다.
-->
        <div class="posts">
            <post
                v-for="(post, index) in posts" 
                :key="index"
                v-bind="post"
            />
        </div>
        <h2>Add a New Post</h2>
<!--[form]
입력된 데이터를 v-model에서 업데이트. 
-->

<!--[event handle]
@은 이벤트리스너와 비슷하다. v-on:click=""과 @click=""은 같다.

이벤트 수식어라는 것도 있는데, event.preventDefault()같은 호출을 편하게 만들어준다.
JS와 관련된 개념이라서 vue에선 이렇게 지원을 한다는 것만 알면 될 것 같다.
-->
        <form @submit.prevent="addPost">
            <input v-model="newPostTitle" placeholder="Post Title..."/>
            <textarea v-model="newPostContent" placeholder="Post Content..."/>
            <button>Add Post</button>
        </form>
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
                    'http://rest-blog.run.goorm.io/api/'
                ).then((response) => {
                    this.posts = response.data;
                });
            },
            addPost: function () {
                axios.post(
                    'http://rest-blog.run.goorm.io/api/', 
                    {
                        title: this.newPostTitle,
                        content: this.newPostContent,
                    }
                )
                .then((response) => {
                    this.newPost = '';
                    this.posts.push(response.data);
                    this.loadposts();
                });
            },
        },
        created() { // 이 컴포넌트가 생성되었을 때.
            this.loadposts();
        },
    };
</script>