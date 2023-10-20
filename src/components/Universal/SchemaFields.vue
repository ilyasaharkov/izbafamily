<template>
  <div
      v-for="item in schemaForm"
      :key="item.id"
      class="form-input__block">
    <input
        class="form-input"
        :placeholder="item.placeholder"
    >
  </div>
</template>

<script>
export default {
  name: "SchemaFields",
  props: {
    schemaForm: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
  @media screen and (min-width: 340px) {
    .form-input {
      transition: all 0.3s ease;
      width: 100%;
      padding: 12.5px 20px;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid $f15c63;
      border-radius: 5px;
      height: -webkit-fill-available;
    }
    .form-input:focus {
      outline: 1px solid $f15c63;
      transition: all 0.3s ease;
    }
    .form-input__block {
      flex: 1;
    }
  }
</style>
