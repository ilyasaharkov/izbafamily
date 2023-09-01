import { ref } from "vue";
import { sideBarRight } from "../../models/SideBarRight/";

const sideBarRightObject = ref(sideBarRight);

const changeSideBarRightObject = () => {
  sideBarRightObject.value.status = !sideBarRightObject.value.status;
};

export { sideBarRightObject, changeSideBarRightObject };
