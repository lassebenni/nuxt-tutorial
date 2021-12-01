<template>
  <div>
    <TheHeader @sidenavToggle="isSideNavOpen = !isSideNavOpen" />
    <TheSideNav :show="isSideNavOpen" @close="isSideNavOpen = false" />
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
import TheHeader from "@/components/Navigation/TheHeader";
import TheSideNav from "@/components/Navigation/TheSideNav";
export default {
  middleware: "log",
  components: {
    TheHeader,
    TheSideNav,
  },
  data() {
    return {
      isSideNavOpen: false,
    };
  },
};
</script>
