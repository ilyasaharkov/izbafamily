<template>
  <div class="app">
    <Header />
    <Hero />
    <Form id="request" />
    <OurСouples />
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!--    <Responsibilities />-->
    <!--    <CheckingCouples />-->
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <Prices />
    <Reviews />
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!--    <LookingJob />-->
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <Footer />
    <SideBarRight />
    <ModalFormWrapper />
  </div>
</template>

<script>
import Header from "../src/components/Header/index.vue";
import Hero from "../src/components/Hero/index.vue";
import Form from "../src/components/Form/index.vue";
import OurСouples from "../src/components/OurСouples/index.vue";
import Responsibilities from '../src/components/Responsibilities/index.vue'
import CheckingCouples from '../src/components/CheckingCouples/index.vue'
import Prices from '../src/components/Prices/index.vue'
import Reviews from '../src/components/Reviews/index.vue'
import LookingJob from '../src/components/LookingJob/index.vue'
import Footer from "../src/components/Footer/index.vue";
import SideBarRight from "../src/components/SideBarRight/index.vue";
import ModalFormWrapper from "../src/components/Form/Modal/WrapperForm.vue";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    SideBarRight,
    Form,
    OurСouples,
    Responsibilities,
    CheckingCouples,
    Prices,
    Reviews,
    LookingJob,
    Footer,
    ModalFormWrapper
  },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
