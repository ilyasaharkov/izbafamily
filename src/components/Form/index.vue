<template>
  <section class="form">
    <div class="container-wrapper">
      <div class="form-layout">
        <h3 class="form-title">Оставьте заявку на подбор семейной пары</h3>
        <form class="form-wrapper">
          <SchemaFields :schema-form="callBackFormViewObject.fields" />
          <button class="form-button"> {{ callBackFormViewObject.button }} </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { callBackFormViewObject } from "@/viewModels/Forms";
import SchemaFields from "@/components/Universal/SchemaFields";

export default {
  name: "index",
  components: { SchemaFields },
  setup() {
    return { callBackFormViewObject }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@media screen and (min-width: 340px) {
  .form {
    margin: 20px 0;
  }
  .form-layout {
    padding: 20px 20px;
  }
  .form-title {
    font-weight: 600;
    font-size: 24px;
    margin: 0 0 20px 0;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .form-button {
    transition: all 0.3s ease;
    width: 100%;
    padding: 15.5px 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: $f15c63;
    border: 1px solid $f15c63;
    border-radius: 20px;
    color: $white;
  }
}

@media screen and (min-width: 768px) {
  .form {
    margin: 30px 0;
  }
  .form-layout {
    padding: 30px 20px;
  }
  .form-title {
    font-size: 28px;
    margin: 0 0 30px 0;
  }
  .form-wrapper {
    flex-direction: row;
    gap: 15px;
    * {
      flex: 1;
    }
  }
}

@media screen and (min-width: 1200px) {
  .form {
    margin: 40px 0;

  }
  .form-layout {
    padding: 50px 40px;
  }
  .form-title {
    font-size: 28px;
    margin: 0 0 30px 0;
  }
  .form-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
