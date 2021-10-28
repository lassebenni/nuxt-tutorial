<template>
  <div class="single-post-page">
    <Post :post="post" />
    <section class="post-feedback">
      <h2>Comments</h2>
      <div class="comment"></div>
      <div class="comment-details"></div>
    </section>
  </div>
</template>

<script>
import Post from "@/components/Posts/Post";

function MyPost(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

export default {
  components: {
    Post,
  },
  data() {
    return {
      post: {
        id: 1,
        title: "Lassse",
        content: "What's up",
        author: "Lasse",
      },
    };
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