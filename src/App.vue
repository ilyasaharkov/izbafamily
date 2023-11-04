<template>
  <div class="app">
    <Header />
    <Hero />
    <Form
        id="request"
        title="Консультируем бесплатно"
        subtitle="Поможем сделать все то, что самостоятельно не всегда возможно.<br>
        Оставьте заявку на консультацию или звоните нам по телефону: <strong><a href='tel:79802099410'>+7(980)209-94-10</a></strong>"
    />
    <CheckingCouples />
    <StepsWork />
    <ResponsibilitiesCouple />
    <Form
        id="middle"
        title="Появились вопросы?"
        subtitle="Задайте нашим специалистам интересующий вопрос по семейным парам.<br>
        Наш менеджер бесплатно проконсультирует вас!"
    />
    <OurСouples />
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!--        <Responsibilities />-->
<!--    <Offers/>-->
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!-- TODO ПОКА УБИРАЕМ   -->
    <!--    <Prices />-->
    <Reviews />
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <!--    <LookingJob />-->
    <!-- TODO ПЕРЕНЕСТИ НА СТРАНИЦУ ВАКАНСИЙ -->
    <Form
        id="footer"
        title="Остались вопросы?"
        subtitle="Задайте нашим специалистам интересующий вопрос по семейным парам.<br>
        Наш менеджер бесплатно проконсультирует вас!"
    />
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
import ResponsibilitiesCouple from '../src/components/ResponsibilitiesCouple/index.vue'
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
    ResponsibilitiesCouple,
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
