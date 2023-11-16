<template>
  <section class="thank-you">
    <div  class="form-layout">
      <h3 class="form-title" style="text-align: center">Спасибо за заявку, форма успешно отправлена!</h3>
      <p class="form-subtitle" style="text-align: center">С вами свяжется менеджер через 15 минут!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "thankYou"
}
</script>

<style scoped>
  .thank-you {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  .form-layout {
    border: 1px solid green;
    border-radius: 10px;
    margin: 0 20px;
  }
</style>
