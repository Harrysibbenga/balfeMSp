import {
    postsCollection
} from "../../firebaseConfig"

const posts = {
    namespaced: true,
    state: {
        allPosts: [],
        post: null
    },
    mutations: {
        setPosts(state, val) {
            if (val) {
                state.allPosts = val
            } else {
                state.allPosts = []
            }
        },
        setPost(state, val) {
            if (val) {
                state.post = val;
            } else {
                state.post = null;
            }
        },
        clearPost(state) {
            state.post = null;
        }
    },
    actions: {
        setPost({
            commit
        }, id) {
            return new Promise((resolve) => {
                postsCollection
                    .doc(id)
                    .get()
                    .then(doc => {
                        let post = doc.data();
                        commit("setPost", post);
                        resolve(post)
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            })

        },
        setPosts({
            commit
        }) {
            postsCollection.orderBy("date", "desc").onSnapshot(querySnapshot => {
                let postsArray = [];

                querySnapshot.forEach(doc => {
                    let post = doc.data();
                    post.id = doc.id;
                    postsArray.push(post);
                });
                commit("setPosts", postsArray)
            });
        }
    },
    getters: {
        getPost(state) {
            return state.post
        },
        getPosts(state) {
            return state.allPosts
        }
    }
}

export default posts;