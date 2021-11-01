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

function MyPost(id, title, content) {
  this.id = id;
  this.title = title;
  this.content = content;
}

export default {
  async asyncData(context) {
    try {
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            loadedPost: {
              id: 1,
              title: "First Post (ID: " + context.params.id + ")",
              content: "This is my first post",
              previewText: "Some preview text",
              author: "Max",
              updatedDate: new Date(),
              thumbnail: "https//nu.nl",
            },
          });
        }, 1000);
      });
      return data;
    } catch (e) {
      context.error(e);
    }
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