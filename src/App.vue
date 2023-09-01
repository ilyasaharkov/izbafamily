<template>
  <div class="app">
    <Header />
    <Hero />
    <Form />
    <SideBarRight />
  </div>
</template>

<script>
import Header from "../src/components/Header/index.vue";
import Hero from "../src/components/Hero/index.vue";
import Form from "../src/components/Form/index.vue";
import SideBarRight from "../src/components/SideBarRight/index.vue";
export default {
  name: "App",
  components: { Header, Hero, SideBarRight, Form },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
