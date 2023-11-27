import { reactive } from "vue";
import { callBack } from "../../models/Forms/";

const callBackFormViewObject = reactive(callBack);
let data = reactive({})

let type_form = {
    request: 'Консультируем бесплатно',
    middle: 'Появились вопросы?',
    footer: 'Остались вопросы?',
}

const sendDataForm = async ($type) => {
    if(!checkValidForm()) return
    const type = type_form[$type]
    data = callBackFormViewObject.fields.reduce((acc, item) => {
        acc[item.code] = item.answer;
        acc.client = null
        acc.status = false
        return acc;
    }, {});
    data.type = type
    callBackFormViewObject.status = true
    //    TODO ДОДЕЛАТЬ СБОР ЛИДОВ
    try {
        const response = await fetch("http://localhost:4000/api/leads/create", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            clearAllFields()
        } else {
            return console.log('[Ошибка]: Не удалось отправить данные')
        }
    } catch (error) {
        console.error("Ошибка при запросе:", error);
    }


}

// Проверяем на заполненность формы
const checkValidForm = () => {
    callBackFormViewObject.fields.forEach((item) => {
        if (item.code === 'phone') {
            if (item.answer.length === 18) {
                item.error.status = false
            } else {
                item.error.status = true
            }
        } else {
            item.answer ? item.error.status = false : item.error.status = true
        }
    })
    return callBackFormViewObject.fields.every(item => item.error.status === false);
}

const clearAllFields = () => {
    callBackFormViewObject.fields.forEach((item) => {
        item.answer = ''
    })
}

export {
    callBackFormViewObject,
    sendDataForm
};
