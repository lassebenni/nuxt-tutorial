<template>
  <div>
    <input type="text" v-model="productId" />
    <button @click="onLoadproduct">Load product</button>
    <nuxt-link to="/products/1">Product ID 1</nuxt-link>
    <nuxt-link to="/products/2">Product ID 2</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: "",
    };
  },
  methods: {
    onLoadproduct() {
        this.$router.push('/products/' + this.productId);
    },
  },
};
</script>
