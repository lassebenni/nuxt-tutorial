<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm :post="templatePost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {
      templatePost: {
        author: "Lasse",
        title: "This post though",
        content: "So good",
        thumbnailLink: "",
      },
    };
  },
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
