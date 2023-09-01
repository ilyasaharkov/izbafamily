<template>
  <div class="app">
    <Header />
    <Hero />
    <SideBarRight />
  </div>
</template>

<script>
import Header from "../src/components/Header/index.vue";
import Hero from "../src/components/Hero/index.vue";
import SideBarRight from "../src/components/SideBarRight/index.vue";
export default {
  name: "App",
  components: { Header, Hero, SideBarRight },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
