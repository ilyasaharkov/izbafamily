<template>
  <section class="looking-job" id="work">
    <div class="container">
      <h3 class="looking-job__title">{{ lookingJobModelViewObject.title }}</h3>
      <p class="looking-job__subtitle">{{ lookingJobModelViewObject.subtitle }}</p>
      <div class="looking-job__block--layout">
        <div class="looking-job__block--wrapper">
          <div
              v-for="item in lookingJobModelViewObject.info"
              :key="item.id"
              class="looking-job__block" >
            <img class="looking-job__block--icon" src="@/assets/images/check.webp" alt="Характеристика">
            <p class="looking-job__block--title">{{ item.title }}</p>
          </div>
        </div>
        <Form
            title="Присоединяйтесь к команде!"
            subtitle="Заполните отклик, и мы перезвоним"
            flex-direction="column"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { lookingJobModelViewObject } from "@/viewModels/LookingJob";
import Form from "@/components/Form/index.vue";
export default {
  name: "index",
  components: {
    Form
  },
  setup() {
    return {
      lookingJobModelViewObject
    }
  }
}
</script>

<style lang="scss">
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
    align-content: baseline;
    gap: 20px;
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
  .looking-job__block--layout {
    display: grid;
    gap: 30px;
    & > .form > .container-wrapper {
        margin: 0;
        width: 100%;
        max-width:  100%;
    }
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
  }
  .looking-job__block--layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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
    font-size: 18px;
    opacity: 0.9;
  }
}
</style>

