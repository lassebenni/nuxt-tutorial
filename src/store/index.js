import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      updatePost(state, post) {
        const idx = state.loadedPosts.findIndex(e => e.id === post.id);
        if (idx) {
          state.loadedPosts[idx] = post;
        }
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + "/posts.json")
          .then(res => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({
                ...res.data[key],
                id: key
              });
            }
            vuexContext.commit("setPosts", postArray);
          })
          .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updated: new Date() };
        return axios
          .post(process.env.baseUrl + "/posts.json", createdPost)
          .then(res => {
            vuexContext.commit("addPost", { ...post, id: res.data.name });
          })
          .catch(e => console.log(e));
      }
    },
    getters: {
      loadedPosts: state => {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
