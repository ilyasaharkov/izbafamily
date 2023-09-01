<template>
  <div class="app">
    <Header />
    <Hero />
    <Form />
    <OurСouples />
    <SideBarRight />
  </div>
</template>

<script>
import Header from "../src/components/Header/index.vue";
import Hero from "../src/components/Hero/index.vue";
import Form from "../src/components/Form/index.vue";
import OurСouples from "../src/components/OurСouples/index.vue";
import SideBarRight from "../src/components/SideBarRight/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    SideBarRight,
    Form,
    OurСouples
  },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
