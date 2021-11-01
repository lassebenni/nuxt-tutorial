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
  asyncData(context, callback) {
    console.log(context);
    callback(null, {
      loadedPosts: [
        {
          id: 1,
          author: "Me",
          title: "Test",
          content: "Hi",
          thumbnail: "http://google.nl",
          previewText: "No",
        },
      ],
    });
  },
};
</script>