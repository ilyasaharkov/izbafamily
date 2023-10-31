<template>
  <div
      v-for="item in schemaForm"
      :key="item.id"
      class="form-input__block">
    <input
        v-if="item.code === 'phone'"
        v-model="item.answer"
        class="form-input"
        v-maska
        data-maska="+7 ### ###-##-##"
        :placeholder="item.placeholder"
    >
    <input
        v-else
        v-model="item.answer"
        class="form-input"
        :placeholder="item.placeholder"
    >
  </div>
</template>

<script>
import { vMaska } from "maska"

export default {
  name: "SchemaFields",
  props: {
    schemaForm: {
      type: Object,
      default: {}
    }
  },
  setup() {
    return {
      vMaska
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
