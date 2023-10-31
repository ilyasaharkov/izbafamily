<template>
  <section class="offers" id="offers">
    <div class="container">
      <Block :item="offers" />
    </div>
  </section>
</template>

<script>
import Block from '@/components/Responsibilities/block.vue'
import { offers } from '@/models/Offers/index.js'
export default {
  name: "index",
  components: { Block },
  setup() {
    return { offers }
  }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 340px) {
  .offers {
    margin: 20px 0 20px 0;
  }
}
@media screen and (min-width: 1200px) {
  .offers {
    margin: 40px 0 40px 0;
  }
}
</style>
