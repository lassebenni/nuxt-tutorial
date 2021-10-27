<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Zen Kaku Gothic Antique", sans-serif;
}
body {
  margin: 0;
}
</style>

<script>
import Header from "@/components/Header";

export default {
  components: { Header },
};
</script>
