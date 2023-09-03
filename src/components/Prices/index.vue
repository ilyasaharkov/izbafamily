<template>
  <section class="prices" style="margin: 100px 0">
    <div class="container">
      {{ pricesModelViewObject }}
    </div>
  </section>
</template>

<script>
import { pricesModelViewObject } from "@/viewModels/Prices";
export default {
  name: "index",
  setup() {
    return {
      pricesModelViewObject
    }
  }
}
</script>

<style scoped>

</style>
