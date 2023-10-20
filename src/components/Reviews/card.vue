<template>
  <div class="reviews-card">
    <div class="reviews-card__top">
      <img class="reviews-card__image" :src="item.image" :alt="item.name">
      <div>
<!--        <p class="reviews-card__date">{{ item.date }}</p>-->
        <p class="reviews-card__name">{{ item.name }}</p>
      </div>
    </div>
    <p class="reviews-card__description">{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";

@media screen and (min-width: 340px) {

  .reviews-card {
    position: relative;
    margin: 0 0 10px 0;
    background-color: $white;
    border-radius: 20px;
    padding: 30px 20px 30px 20px;
  }
  .reviews-card__top {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 0 10px 0;
  }
  .reviews-card__image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .reviews-card__date {
    font-size: 16px;
    opacity: 0.5;
  }
  .reviews-card__name {
    font-size: 18px;
    font-weight: 600;
  }
  .reviews-card__description {
    font-size: 18px;
    font-weight: 400;
  }
}
@media screen and (min-width: 1200px) {
  .reviews-card {
    position: relative;
    margin: 0 0 10px 0;
    background-color: $white;
    border-radius: 20px;
    padding: 30px 20px 30px 20px;
  }
  .reviews-card__top {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 0 10px 0;
  }
  .reviews-card__image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .reviews-card__date {
    font-size: 16px;
    opacity: 0.5;
  }
  .reviews-card__name {
    font-size: 18px;
    font-weight: 600;
  }
  .reviews-card__description {
    font-size: 18px;
    font-weight: 400;
  }
}

</style>
