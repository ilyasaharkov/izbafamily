import { ref } from "vue";

const statusModalForm = ref(false)

const changeStatusForm = () => {
    statusModalForm.value ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
    statusModalForm.value = !statusModalForm.value
}

const listenerClick = (event) => {
    event.target.classList.contains('modal-form') ? changeStatusForm() : ''
}

export {
    listenerClick,
    changeStatusForm,
    statusModalForm
}
