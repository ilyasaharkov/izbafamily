<template>
  <section class="our-couples">
    <div class="container">
      {{ ourCouplesModelViewObject }}
    </div>
  </section>
</template>

<script>
import { ourCouplesModelViewObject } from "@/viewModels/OurСouples";

export default {
  name: "index",
  setup() {
    return {
      ourCouplesModelViewObject
    }
  }
}
</script>

<style scoped>

</style>
