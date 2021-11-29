.<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="post" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-guide-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          post: { ...res.data, id: context.params.postId },
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    updatePost(post) {
      return axios
        .put(
          "https://nuxt-guide-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
            post.id +
            ".json",
          post
        )
        .then((res) => {
          this.$store.commit("updatePost", post);
          this.$router.push("/admin/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>