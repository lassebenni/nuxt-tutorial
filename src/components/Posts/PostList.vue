<template>
  <section class="list-posts">
    <PostPreview
      id="1"
      thumbnail="https://thumbs.dreamstime.com/z/new-skills-knowledge-webinar-training-business-internet-technology-concept-new-skills-knowledge-webinar-training-business-internet-121274023.jpg"
      title="New Skills Knowledge Webinar Training"
      previewText="New Skills"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
};
</script>

<style>
.list-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>