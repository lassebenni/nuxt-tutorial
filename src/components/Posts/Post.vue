<template>
  <section class="post">
    <h1>{{ post.title }}</h1>
    <div class="post-details">
      <div>Last updated:</div>
      <div>Written by: {{ post.author }}</div>
    </div>
    <p>{{ post.content }}</p>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      validator: function (value) {
        return value.title && value.author && value.content;
      },
    },
  },
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}
</style>