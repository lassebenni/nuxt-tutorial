import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: 1,
                                author: "Me",
                                title: "Test",
                                content: "Hi",
                                thumbnail: "http://google.nl",
                                previewText: "No",
                            },
                            {
                                id: 1,
                                author: "Me",
                                title: "Hi again",
                                content: "Hi 2.0",
                                thumbnail: "http://google.nl",
                                previewText: "No",
                            },
                        ]);
                    resolve();
                }, 1000);
            });
        },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore