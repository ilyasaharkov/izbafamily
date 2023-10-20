<template>
  <section v-show="statusModalForm" class="modal-form">
    <div class="modal-form__content">
      {{ objectData }}
    </div>
  </section>
</template>

<script>
import { statusModalForm, listenerClick, objectData } from '@/viewModels/Form/Modal/index.js'
import { onBeforeUnmount, onMounted } from "vue";
export default {
  name: "WrapperForm",
  setup () {

    onMounted(() => {
      document.addEventListener('click', (e) => listenerClick(e))
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', () => listenerClick())
    })

    return { statusModalForm, objectData }
  }
}
</script>

<style lang="scss" scoped>
.modal-form {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-form__content {
  background-color: white;
  border-radius: 20px;
  min-width: 800px;
  min-height: 400px;
}

</style>
