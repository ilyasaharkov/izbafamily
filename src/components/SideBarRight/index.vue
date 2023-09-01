<template>
  <div v-if="sideBarRightObject.status" class="header__menu--mobile">
    <div class="header__menu--mobile__wrapper">
      <button @click="changeSideBarRightObject">Закрыть</button>
      <div class="header__menu--mobile__items">
        {{ headerViewObject }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  sideBarRightObject,
  changeSideBarRightObject,
} from "../../viewModels/SideBarRight/";
import { headerViewObject } from "../../viewModels/Header/";
export default {
  setup() {
    return {
      sideBarRightObject,
      headerViewObject,
      changeSideBarRightObject,
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 340px) {
  .header__menu--mobile__wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .header__menu--mobile {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    color: white;
    z-index: 999;
    width: 70%;
  }
  .header__menu--mobile__items {
    display: flex;
    align-self: stretch;
    background: black;
  }
}
</style>
