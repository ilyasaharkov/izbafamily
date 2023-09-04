<template>
  <section class="looking-job">
    <div class="container">
      <h3 class="looking-job__title">{{ lookingJobModelViewObject.title }}</h3>
      <p class="looking-job__subtitle">{{ lookingJobModelViewObject.subtitle }}</p>
      <div class="looking-job__block--wrapper">
        <div
            v-for="item in lookingJobModelViewObject.info"
            :key="item.id"
            class="looking-job__block" >
          <img class="looking-job__block--icon" src="@/assets/images/check.png" alt="Характеристика">
          <p class="looking-job__block--title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { lookingJobModelViewObject } from "@/viewModels/LookingJob";
export default {
  name: "index",
  setup() {
    return {
      lookingJobModelViewObject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";
.looking-job__title {
  @include title()
}
.looking-job__subtitle {
  @include subtitle()
}
@media screen and (min-width: 340px) {

  .looking-job__block--wrapper {
    display: grid;
    grid-template-columns: repeat(
                auto-fill, minmax(260px, 1fr));
    background-color: $white-smoke;
    border-radius: 20px;
    padding: 20px 10px 20px 10px;
    column-gap: 10px;
    row-gap: 20px;
  }
  .looking-job__block {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  .looking-job__block--icon {
    width: 35px;
    height: 35px;
  }
  .looking-job__block--title {
    font-weight: 500;
    font-size: 16px;
    opacity: 0.9;
  }
}
@media screen and (min-width: 1200px) {
  .looking-job__block--wrapper {
    display: grid;
    grid-template-columns: repeat(
                auto-fill, minmax(460px, 1fr));
    background-color: $white-smoke;
    border-radius: 20px;
    padding: 30px 40px 30px 40px;
    column-gap: 20px;
    row-gap: 20px;
  }
  .looking-job__block {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  .looking-job__block--icon {
    width: 45px;
    height: 45px;
  }
  .looking-job__block--title {
    font-weight: 500;
    font-size: 18px;
    opacity: 0.9;
  }
}
</style>

