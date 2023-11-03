<template>
  <div v-if="sideBarRightObject.status" class="header__menu--mobile__layout">
    <div class="header__menu--mobile">
      <div class="header__menu--mobile__wrapper" :style="`height: ${height}px`">
        <div class="header__menu--mobile__close" @click="changeSideBarRightObject">
          <img src="@/assets/images/close.webp"/>
        </div>
        <div class="header__menu--mobile__items">
          <img class="header__menu--mobile__logo" :src="headerViewObject.icon" alt="Логотип">
          <div class="header__menu--mobile__item--wrapper">
            <button
                v-for="item in headerViewObject.menu"
                :key="item.id"
                class="header__menu--mobile__item"
                @click.stop="toScrollElementMobile(item.code)"
            >{{ item.name }}</button>
          </div>
          <a
              v-for="contact in headerViewObject.contacts"
              :key="contact.id"
              :href="`tel: ${contact.name}`"
              class="header__menu--mobile__contacts"
          >
            <img class="header__menu--mobile__contacts--icon" :src="contact.icon" alt="Телефон">
            {{ contact.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import { scrollToElementToID } from '@/utils/ScrollToElement/index'
import {
  sideBarRightObject,
  changeSideBarRightObject,
  getHeightClient
} from "../../viewModels/SideBarRight/";
import { headerViewObject } from "../../viewModels/Header/";
export default {
  setup() {
    const height = ref()

    const toScrollElementMobile = (code) => {
      scrollToElementToID(code)
      changeSideBarRightObject()
    }

    onMounted(() => {
      height.value = getHeightClient()
    })

    return {
      sideBarRightObject,
      headerViewObject,
      changeSideBarRightObject,
      toScrollElementMobile,
      height
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@media screen and (min-width: 340px) {
  .header__menu--mobile__layout {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 99;
  }
  .header__menu--mobile__contacts--icon {
    width: 24px;
    height: 24px;
  }
  .header__menu--mobile__wrapper {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
  }
  .header__menu--mobile__close {
    border: none;
    background-color: $f15c63;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

  }
  .header__menu--mobile__close > img {
    width: 32px;
    height: 32px;
  }
  .header__menu--mobile {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    color: white;
    z-index: 999;
    width: auto;
  }
  .header__menu--mobile__items {
    display: flex;
    align-self: baseline;
    align-items: center;
    background: $white;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 50px 30px 50px;
    gap: 30px;
    height: inherit;
  }
  .header__menu--mobile__item--wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .header__menu--mobile__item {
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: $black;
  }
  .header__menu--mobile__logo {
    width: 75px;
    height: 60px;
  }
  .header__menu--mobile__contacts {
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    color: $black;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
