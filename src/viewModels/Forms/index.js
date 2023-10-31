import { reactive, ref } from "vue";
import { callBack } from "../../models/Forms/";
import { api } from "@/api";

const callBackFormViewObject = reactive(callBack);
let data = reactive({})

let type_form = {
    request: 'Форма после шапки',
    middle: 'Форма после этап работы',
    offer: 'Форма в подвале'
}

const sendDataForm = ($type) => {
    if(!checkValidForm()) return
    const type = type_form[$type]
    data = callBackFormViewObject.fields.reduce((acc, item) => {
        acc[item.code] = item.answer;
        return acc;
    }, {});
    data.type = type
    const result = getFormatTextForTelegram()
    callBackFormViewObject.status = true
    api.tgBotSender('lead', result)
        .then(() => {
            callBackFormViewObject.status = true
            clearAllFields()
            setTimeout(() => {
                callBackFormViewObject.status = false
            }, 3000)
        })
        .catch(error => {
            console.log('error', error)
            api.tgBotSender('report', '[Ошибка]: Не удалось отправить форму.')
                .then()
                .catch()
        })
}

// Проверяем на заполненность формы
const checkValidForm = () => {
    // Длина 16
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

const getFormatTextForTelegram = () => {
    return (`-----------------------------------------\n\n✅ Новая заявка от клиента\n\nТип формы: ${data.type}\n\nИмя: ${data.name}\n\nНомер телефона: ${data.phone}\n\n-----------------------------------------`).replace(/(\[[^\][]*]\(https[^()]*\))|[_*[\]()~>#+=|{}.!-]/gi, (x, y) => y || '\\' + x)
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
