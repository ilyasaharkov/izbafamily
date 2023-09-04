<template>
  <div class="responsibilities-block">
    <h2 class="responsibilities-block__title">{{ item.title }}</h2>
    <div class="responsibilities-block__card--wrapper">
      <div
          v-for="card in item.cards"
          :key="card.id"
          class="responsibilities-block__card">
        <img class="responsibilities-block__icon" :src="card.icon" :alt="card.title">
        <p class="responsibilities-block__card--title">
          {{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "block",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";
.responsibilities-block__title {
  @include title();
}

  @media screen and (min-width: 340px) {
    .responsibilities-block {
      margin: 0 0 40px 0;
    }
    .responsibilities-block__card--wrapper {
      display: grid;
      grid-template-columns: repeat(
                auto-fill, minmax(260px, 1fr));
      gap: 10px;
      background:  $white-smoke;
      border-radius: 20px;
      padding: 15px;
    }
    .responsibilities-block__title {
      width: auto;
    }
    .responsibilities-block__card {
      display: flex;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      background: $white;
      gap: 20px;
    }
    .responsibilities-block__card--title {
      font-weight: 500;
      color: $black;
      font-size: 16px;
    }
    .responsibilities-block__icon {
      width: 55px;
      height: 55px;
    }
  }
  @media screen and (min-width: 1200px) {
    .responsibilities-block {
      margin: 0 0 40px 0;
    }
    .responsibilities-block__card--wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      border-radius: 20px;
      padding: 20px;
    }
    .responsibilities-block__title {
       width: 801px;
     }
    .responsibilities-block__card {
      display: flex;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
      background: $white;
    }
    .responsibilities-block__card--title {
      font-weight: 500;
      color: $black;
      font-size: 16px;
    }
  }
</style>
