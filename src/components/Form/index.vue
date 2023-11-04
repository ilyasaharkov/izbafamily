<template>
  <section class="form" :id="id">
    <div class="container-wrapper">
      <div v-if="!callBackFormViewObject.status" class="form-layout">
        <h3 class="form-title" v-html="title" />
        <p class="form-subtitle" v-html="subtitle" />
        <form
            @submit.prevent="sendDataForm(id)"
            class="form-wrapper"
            :style="`flex-direction: ${flexDirection}`"
        >
          <SchemaFields  :schema-form="callBackFormViewObject.fields" />
          <button class="form-button"> {{ callBackFormViewObject.button }} </button>
        </form>
      </div>
      <div  class="form-layout" v-else>
        <h3 class="form-title" style="text-align: center">Спасибо за заявку, форма успешно отправлена!</h3>
        <p class="form-subtitle" style="text-align: center">С вами свяжется менеджер через 15 минут!</p>
      </div>
    </div>
  </section>
</template>

<script>
import {
  callBackFormViewObject,
  sendDataForm
  } from "@/viewModels/Forms";
import SchemaFields from "@/components/Universal/SchemaFields";

export default {
  name: "index",
  props: {
    title: {
      type: String,
      default: 'Оставьте заявку на подбор семейной пары'
    },
    subtitle: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    flexDirection: {
      type: String,
      default: ''
    }
  },
  components: { SchemaFields },
  setup() {
    return {
      callBackFormViewObject,
      sendDataForm
    }
  }
}
</script>

<style lang="scss">
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";
.form-button {
  @include button
}
@media screen and (min-width: 340px) {
  .form-layout {
    padding: 20px 20px;
  }
  .form-title {
    font-weight: 600;
    font-size: 24px;
    margin: 0 0 10px 0;
  }
  .form-subtitle {
    font-weight: 500;
    font-size: 16px;
    margin: 0 0 40px 0;
    line-height: 140%;
    opacity: .8;
    & > a {
      font-size: 10px;
    }
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

}

@media screen and (min-width: 768px) {
  .form-layout {
    padding: 30px 20px;
  }
  .form-title {
    font-size: 28px;
    margin: 0 0 10px 0;
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
  .form-layout {
    padding: 50px 40px;
  }
  .form-title {
    font-size: 28px;
    margin: 0 0 10px 0;
  }
  .form-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 300px;
  }
}
</style>
