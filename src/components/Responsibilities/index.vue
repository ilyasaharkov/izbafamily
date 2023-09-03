<template>
  <div class="responsibilities">
    <div class="container">
      <Block
        :item="responsibilitiesModelViewObject.married_couple"
      />
      <Block
        :item="responsibilitiesModelViewObject.your_needs"
      />
    </div>
  </div>
</template>

<script>
import { responsibilitiesModelViewObject } from "../../viewModels/Responsibilities/";
import Block from './block.vue'
export default {
  name: "index",
  components: { Block },
  setup () {
    return {
      responsibilitiesModelViewObject
    }
  }
}
</script>

<style scoped>

</style>
