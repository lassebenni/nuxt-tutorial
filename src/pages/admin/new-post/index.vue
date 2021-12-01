<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm :post="templatePost" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
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
        thumbnail: "~/assets/images/bg.jpg",
        previewText: "Yah",
      },
    };
  },
  methods: {
    onSubmit(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        console.log("moving on");
        this.$router.push("/admin");
      });
    },
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
