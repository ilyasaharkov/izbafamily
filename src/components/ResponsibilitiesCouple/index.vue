<template>
  <section class="responsibilities-couple" id="responsibilities">
    <div class="container">
      <h2 class="responsibilities-couple__title">{{ responsibilitiesCouple.title }}</h2>
      <p class="responsibilities-couple__subtitle">{{ responsibilitiesCouple.subtitle }}</p>
      <p class="responsibilities-couple__info"><strong>{{ responsibilitiesCouple.info }}</strong></p>
      <ul class="responsibilities-couple__ul">
        <li
            v-for="(item, index) in responsibilitiesCouple.list"
            :key="index"
            class="responsibilities-couple__li"
        >{{ item }}</li>
      </ul>
      <p class="responsibilities-couple__additionally"><strong>{{ responsibilitiesCouple.additionally }}</strong></p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { responsibilitiesCouple } from '@/models/ResponsibilitiesCouple/index.js'
export default defineComponent({
  name: "index",
  setup() {
    return { responsibilitiesCouple }
  }
})
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";

.responsibilities-couple__title {
  @include title()
}
.responsibilities-couple__subtitle, .responsibilities-couple__info {
  @include subtitle()
}
.responsibilities-couple__info {
  opacity: 0.5;
}

@media screen and (min-width: 340px) {
  .responsibilities-couple {
    margin: 0 0 20px 0;
  }
  .responsibilities-couple__ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 15px 0;
  }
  .responsibilities-couple__li {
    font-size: 16px;
    font-weight: 600;
    &:before {
      content: '\2022';
      color: green;
      font-size: 20px;
      display: inline-block;
      margin-right: 5px;
      width: 25px;
      height: 25px;
      text-align: center;
    }
  }
}

@media screen and (min-width: 800px) {
  .responsibilities-couple {
    margin: 0 0 40px 0;
  }
}

@media screen and (min-width: 1200px) {
  .responsibilities-couple {
    margin: 0 0 60px 0;
  }
  .responsibilities-couple__ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 20px 0;
  }
  .responsibilities-couple__li {
    font-size: 18px;
    &:before {
      content: '\2022';
      color: green;
      font-size: 25px;
      display: inline-block;
      margin-right: 5px;
      width: 35px;
      height: 35px;
      text-align: center;
    }
  }
}
</style>
