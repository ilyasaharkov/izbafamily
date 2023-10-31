<template>
  <div class="app">
    <Header />
    <Hero />
    <Form id="request" />
    <OurСouples />
    <StepsWork />
    <Form
        id="middle"
        title="Оставьте заявку нашему менеджеру"
        subtitle="КАКОЙ ТО ТЕКСТ?"
    />
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!--        <Responsibilities />-->
    <Offers/>
    <CheckingCouples />
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!-- TODO ПОКА УБИРАЕМ   -->
    <!--    <Prices />-->
    <Reviews />
    <Form
        id="offer"
    />

    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!--    <LookingJob />-->
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <Footer />
    <SideBarRight />
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
import StepsWork from '../src/components/StepsWork/index.vue'
import Offers from '../src/components/Offers/index.vue'
import Footer from "../src/components/Footer/index.vue";
import SideBarRight from "../src/components/SideBarRight/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    SideBarRight,
    Form,
    OurСouples,
    Offers,
    StepsWork,
    Responsibilities,
    CheckingCouples,
    Prices,
    Reviews,
    LookingJob,
    Footer
  },
};
</script>

<style lang="scss" scoped>
.app {
  position: relative;
}
</style>
