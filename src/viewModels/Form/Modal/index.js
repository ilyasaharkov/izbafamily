import { ref, watch } from "vue";

const statusModalForm = ref(false)
const data = ref({})
const objectData = ref({})

const initFormModal = ($data) => {
    data.value = $data
    changeStatusForm()
}

watch(() => data.value, (newValue) => {
    objectData.value = newValue
}, { deep: true })


const changeStatusForm = () => {
    if (statusModalForm.value) {
        document.body.style.overflow = 'auto'
        objectData.value = {}
    } else {
        document.body.style.overflow = 'hidden'
    }
    statusModalForm.value = !statusModalForm.value
}

const listenerClick = (event) => {
    event.target.classList.contains('modal-form') ? changeStatusForm() : ''
}

export {
    listenerClick,
    initFormModal,
    objectData,
    statusModalForm
}
