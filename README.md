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

### Vuex - Key-value store (28-11-21)

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


```
