<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products">Products</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-items {
  list-style: none;
  padding: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
</style>