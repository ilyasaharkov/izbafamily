<template>
  <section class="form" :id="id">
    <div class="container-wrapper">
      <div class="form-layout">
        <h3 class="form-title" v-html="title" />
        <p class="form-subtitle">
          Задайте нашим специалистам интересующий вопрос по семейным парам.
        </p>
        <p class="form-subtitle form-subtitle__subtitle">Наш менеджер бесплатно проконсультирует вас!</p>
        <div class="form-social__link">
          <a href="https://api.whatsapp.com/send?phone=79802099410&text=Добрый день! Я с сайта, мне нужна консультация. Можем пообщаться?" target="_blank" class="form-social__link--wa">Связаться в WhatsApp</a>
<!--          <a class="form-social__link&#45;&#45;vk" href="#">Связаться в Vkontakte</a>-->
        </div>
        <p class="form-or">или оставьте заявку</p>
        <template v-if="fetchLoad.success">
          <div class="form-layout--success">
            <p class="form-layout--success__title">Благодарим за Вашу заявку!</p><br>
            <p class="form-layout--success__subtitle">Ваш запрос успешно отправлен.<br> Наш менеджер свяжется с Вами в течение <span>15 минут</span>.</p>
          </div>
        </template>
        <template v-else>
          <form
              @submit.prevent="sendDataForm(id)"
              class="form-wrapper"
              :style="`flex-direction: ${flexDirection}`"
          >
            <SchemaFields  :schema-form="callBackFormViewObject.fields" />
            <button class="form-button">
              <template v-if="fetchLoad.loading">
                <span class="loader" />
              </template>
              <template v-else>
                {{ callBackFormViewObject.button }}
              </template>
            </button>
          </form>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import {
  callBackFormViewObject,
  sendDataForm,
  fetchLoad,
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
      sendDataForm,
      fetchLoad
    }
  }
}
</script>

<style lang="scss">
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";
.form-layout--success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-button {
  @include button
}
.loader {
  width: 18px;
  height: 18px;
  border: 3px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media screen and (min-width: 340px) {
  .form-social__link {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .form-layout--success {
    background: white;
    border-radius: 10px;
    padding: 20px 0;
  }
  .form-layout--success__title {
    color: #198737;
    font-size: 20px;
    font-weight: 600;
  }
  .form-layout--success__subtitle {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 130%;
    & > span {
      color: #198737;
    }
  }
  .form-or {
    margin: 30px 0;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  .form-social__link--wa {
    padding: 15.5px 0;
    width: 100%;
    background: #198737;
    text-align: center;
    border-radius: 10px;
    color: white;
  }
  .form-social__link--vk {
    padding: 15.5px 0;
    width: 100%;
    background: #0077ff;
    text-align: center;
    border-radius: 10px;
    color: white;
  }
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
    line-height: 140%;
    opacity: .8;
    & > a {
      font-size: 10px;
    }
  }
  .form-subtitle__subtitle {
    margin: 10px 0 20px 0;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

}

@media screen and (min-width: 800px) {
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
  .form-social__link {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
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
    grid-template-columns: 1fr 1fr 1fr 1fr ;
  }
  .form-social__link {
    & > a {
      font-size: 18px;
    }
  }
}
</style>
