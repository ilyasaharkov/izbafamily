<template>
  <div
      v-for="item in schemaForm"
      :key="item.id"
      class="form-input__block">
      <input
          v-if="item.code === 'phone'"
          v-model="item.answer"
          class="form-input"
          :name="item.code"
          :id="item.code"
          v-maska
          data-maska="+7 (###) ###-##-##"
          :placeholder="item.placeholder"
          :style="item.error.status ? 'border: 1px solid red': ''"
      >
      <input
          v-if="item.code === 'input'"
          :name="item.code"
          :id="item.code"
          v-model="item.answer"
          class="form-input"
          :placeholder="item.placeholder"
          :style="item.error.status ? 'border: 1px solid red': ''"
      >
      <select
          v-if="item.code === 'select'"
          :style="item.error.status ? 'border: 1px solid red': ''"
          v-model="item.answer"
      >
        <option value="" disabled selected>{{ item.placeholder }}</option>
        <option v-for="(select, index) in item.list"
                :key="index" :value="select">{{ select }}</option>
      </select>

    <p class="form-input__block--error" v-if="item.error.status">{{ item.error.info }}</p>
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
      padding: 15.5px 20px;
      font-size: 16px;
      font-weight: 600;
      border: 1px solid #198737;
      border-radius: 10px;
      height: -webkit-fill-available;
    }
    .form-input:focus {
      outline: 1px solid #198737;
      transition: all 0.3s ease;
    }
    .form-input__block {
      flex: 1;
      position: relative;
    }
    .form-input__block--error {
      font-weight: 600;
      font-size: 12px;
      color: red;
      margin: 14px 0 0 0;
    }
  }

  @media screen and (min-width: 800px) {
    .form-input__block--error {
      color: red;
      position: absolute;
      bottom: -25px;
      font-weight: 600;
      font-size: 12px;
    }
  }

  @media screen and (min-width: 1200px) {
    .form-input__block--error {
      font-weight: 600;
      font-size: 14px;
    }
  }

select {
  padding: 15.5px 40px 15.5px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #198737;
  border-radius: 10px;
  height: -webkit-fill-available;
  -webkit-appearance: none; /* Убираем стандартные стили для Safari */
  width: 100%;
  &:focus {
    outline: none;
  }
}

/* Стили для опций выпадающего списка */
option {
  //padding: 12px 16px;
}
</style>
