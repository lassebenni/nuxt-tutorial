# nuxt-tutorial

23-08-21 - Udemy guide

## Develop

- Start dev environment with `docker-compose up`.

---

## Notes

- Added `ts-shim.d.ts` file to be able to [import components correctly](https://github.com/nuxt/typescript/issues/153).
- Created a `src` subdir and put project files in there to be able to bind them to a separate Docker volume for hot reloading.

---

## Questions

- How does the binding work e.g. in `AppControlInput`?

---

## Concepts

### Asyncdata

- Data can be loaded asynchronously using the `async asyncData(context) {...}` keyword. This "merges" the result with the `data` keyword and it is automatically available in the state of the page.
- Promises can be used in combination with the `async` keyword:

``` javascript
const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
          resolve({
              fetch_some_data()
          })
          .then((data) => {
            handle_result(data)
          })
          .catch((e) => {
            handle_error(e) 
          })
        }, 1000);
      });
```

### Vuex - Key-value store

- Data can be stored in the frontend using the `Vuex` key-value store/cache.

``` javascript
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
```

- Store some data into the store:

``` javascript
...
.then((data) => {
    context.store.commit('setPosts', data.loadedPosts)
})
...
```

- Then load data from the store:

``` javascript
...
computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
...
```

- The `fetch` keyword can be used to "fetch" data asynchronously like the `async` keyword, but it doesn't merge it with the `data` object: you have to handle the result yourself. It can be used in combination with the Vuex store for instance to store the result.

- The `nuxtServerInit` method is a helper method inside the Vuex store which can be used to preload resources on the server. It is only executed on the server, and only once.

``` javascript
...
const createStore = () => {
    return new Vuex.Store({
    ...

    actions: {
    nuxtServerInit(vuexContext, posts) {
        perform_some_server_logic()
        ...
```

Getters

- The state in the store is retrieved with general purpose `getter` [methods](https://vuex.vuejs.org/guide/getters.html):

``` javascript
...
 getters: {
      loadedPosts: state => {
        return state.loadedPosts;
      }
    }
 ...
```

Mutations

- Mutations modify the state in the Vuex store. They take the state as an argument and can apply any necessary changes. They are called with the `this.$store.commit('name_of_mutation', arg)` syntax.

``` javascript
...
mutations: {
    setPosts(state, posts) {
    state.loadedPosts = posts;
    },
...
# then later call the mutation
...
this.$sore.commit("setPosts', posts);
...
```

Actions

- Similar to mutations, actions are used to change the state, but do not directly modify it. They call upon mutations themselves, and are `async` in nature. Call them with `this.$store.dispatch('action_name', arg)`.

``` javascript
...
    actions: {
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    }
...

# call them async
...
this.$store.dispatch('setPosts', posts).then(() => {
    this.$router.push('some/route')
}
...
```

### Axios

Javascript AJAX requests can be send using the `axios` library.

- Perform HTTP Post using `axios`:

``` javascript
...
import axios from 'axios'
...
  methods: {
    onSubmit(postData) {
        axios .post(
            "some_url_endpont/",
            postData
            )
            .then(() => {
            this.$router.push("/admin/");
            })
            .catch((err) => {
            console.log(err);
            });
        },
...
```

- Perform a GET request:

``` javascript
    axios.get('some-url.com')
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
```

### Nuxt.config.js

The nuxt config can be used to set certain behaviour across the application.

ENV

- Use the `env` keyword to set environment variables:

``` javascript

// for instance to set an applicaiton wide URL
...
export default {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-guide-default-rtdb.europe-west1.firebasedatabase.app/"
  }
}
...
```

#### Plugins

- Plugins "run before your app does" and make it possible to extend your application with custom javascript code.

``` javascript
// nuxt.config.js

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/core-components.js", "~/plugins/date-filter.js"],

```

#### Modules

- Modules are npm/yarn packages that extend your application. They can be third-party libraries downloaded from the internet.

``` javascript
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

```
