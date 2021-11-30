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
export default {
  fetch(context) {},
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>