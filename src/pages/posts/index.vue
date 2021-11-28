<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    PostList,
  },
  fetch(context) {
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>