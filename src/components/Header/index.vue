<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <img
          class="header-wrapper__logo"
          :src="headerViewObject.icon"
          alt="logo"
        />
        <div class="header-wrapper__links">
          <button
            v-for="link in headerViewObject.menu"
            :key="link.id"
            @click="scrollToElementToID(link.code)"
            class="header-wrapper__link"
          >
            {{ link.name }}
          </button>
        </div>
        <div class="header-wrapper__contacts">
          <a
            v-for="item in headerViewObject.contacts"
            :key="item.id"
            :href="`tel:${item.name}`"
            class="header-wrapper__contacts--links"
          >
            {{ item.name }}
          </a>
        </div>
        <button class="header-hamburger" @click="changeSideBarRightObject">
          <span class="header-hamburger__item"></span>
          <span class="header-hamburger__item"></span>
          <span class="header-hamburger__item"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { headerViewObject } from "@/viewModels/Header/";
import { changeSideBarRightObject } from "@/viewModels/SideBarRight/";
import { scrollToElementToID } from '@/utils/ScrollToElement/index'
export default {
  name: "Header",
  setup() {
    return {
      headerViewObject,
      changeSideBarRightObject,
      scrollToElementToID
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";

@media screen and (min-width: 340px) {
  .header__menu--mobile {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
  }
  .header {
    box-shadow: 1px 19px 41px #c3c3c640;
    position: sticky;
    top: 0;
    z-index: 99;
    background: $white;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
  .header-wrapper__logo {
    width: 75px;
    height: 60px;
  }
  .header-wrapper__links {
    display: none;
  }
  .header-wrapper__link {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: $f15c63;
    }
  }
  .header-wrapper__contacts--links {
    display: none;
  }
  .header-hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .header-hamburger__item {
    width: 20px;
    height: 2px;
    background-color: #000;
    margin-bottom: 4px;
  }
}

@media screen and (min-width: 768px) {
  .header {
    box-shadow: 1px 19px 41px #c3c3c640;
    position: sticky;
    top: 0;
    z-index: 99;
    background: $white;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
  .header-wrapper__logo {
    width: 75px;
    height: 60px;
  }
  .header-wrapper__links {
    display: none;
  }
  .header-wrapper__link {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: $f15c63;
    }
  }
  .header-wrapper__contacts--links {
    display: none;
  }
  .header-hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .header-hamburger__item {
    width: 20px;
    height: 2px;
    background-color: #000;
    margin-bottom: 4px;
  }
}

@media screen and (min-width: 992px) {
  .header {
    box-shadow: 1px 19px 41px #c3c3c640;
    position: sticky;
    top: 0;
    z-index: 99;
    background: $white;
  }
  .header-hamburger {
    display: none;
  }
  .header-wrapper,
  .header-wrapper__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-wrapper {
    padding: 5px 0;
  }
  .header-wrapper__logo {
    width: 90px;
    height: 75px;
  }
  .header-wrapper__links {
    column-gap: 20px;
  }
  .header-wrapper__link {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: $f15c63;
    }
  }
  .header-wrapper__contacts--links {
    display: block;
    text-decoration: none;
    color: $white-blue;
  }
}

@media screen and (min-width: 1200px) {
  .header {
    box-shadow: 1px 19px 41px #c3c3c640;
    position: sticky;
    top: 0;
    z-index: 99;
    background: $white;
  }
  .header-wrapper,
  .header-wrapper__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-wrapper {
    padding: 5px 0;
  }
  .header-wrapper__logo {
    width: 90px;
    height: 75px;
  }
  .header-wrapper__links {
    column-gap: 20px;
  }
  .header-wrapper__link {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: $f15c63;
    }
  }
  .header-wrapper__contacts--links {
    text-decoration: none;
    color: $white-blue;
  }
}
</style>
