<template>
  <div class="single-post-page">
    <Post :post="loadedPost" />
    <section class="post-feedback">
      <h2>Comments</h2>
      <div class="comment"></div>
      <div class="comment-details"></div>
    </section>
  </div>
</template>

<script>
import Post from "@/components/Posts/Post";
import axios from "axios";

export default {
  async asyncData(context) {
    return axios
      .get(process.env.baseUrl + "/posts/" + context.params.id + ".json")
      .then((response) => {
        return {
          loadedPost: response.data,
        };
      })
      .catch((e) => {
        context.error(e);
      });
  },
  components: {
    Post,
  },
};
</script>

<style scoped>
.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>