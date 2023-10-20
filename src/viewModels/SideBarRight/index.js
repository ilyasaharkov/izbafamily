import { ref } from "vue";
import { sideBarRight } from "../../models/SideBarRight/";

const sideBarRightObject = ref(sideBarRight);

const changeSideBarRightObject = () => {
  // Запрещаем прокрутку
  sideBarRightObject.value.status ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
  sideBarRightObject.value.status = !sideBarRightObject.value.status;
};

const getHeightClient = () => {
  const height = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
  );
  console.log('height', height)
  return height;
};

export { sideBarRightObject, changeSideBarRightObject, getHeightClient };
