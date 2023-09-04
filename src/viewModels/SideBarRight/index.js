import { ref } from "vue";
import { sideBarRight } from "../../models/SideBarRight/";

const sideBarRightObject = ref(sideBarRight);

const changeSideBarRightObject = () => {
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
