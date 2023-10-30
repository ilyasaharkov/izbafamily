<template>
  <section class="steps-work">
    <div class="container">
      <Block :item="stepsWork" />
    </div>
  </section>
</template>

<script>
import Block from '@/components/Universal/BlockCards.vue'
import { stepsWork } from '@/models/StepsWork/index.js'
export default {
  name: "index",
  components: { Block },
  setup() {
    return { stepsWork }
  }
}
</script>

<style lang="scss" scoped>
  .steps-work {
    margin: 0 0 40px 0;
  }
</style>
