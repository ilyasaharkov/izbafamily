import { reactive } from "vue";
import { callBack } from "../../models/Forms/";
import { api } from "@/api";

const callBackFormViewObject = reactive(callBack);
let data = reactive({})

let type_form = {
    request: 'Консультируем бесплатно',
    middle: 'Появились вопросы?',
    footer: 'Остались вопросы?',
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
            clearAllFields()
            window.open('/thank-you', '_self');
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

const formatPhoneNumber = (phoneNumber) => {
    // Удалить все нецифровые символы из номера
    const formattedNumber = phoneNumber.replace(/\D/g, '');

    // Добавить "+7" к началу номера
    const finalNumber = "+" + formattedNumber;

    return finalNumber;
}

const getFormatTextForTelegram = () => {
    const formatNumber = formatPhoneNumber(data.phone)
    return (`-------------------------------------\n\n✅ Новая заявка от клиента\n\n❓ Тип формы: ${data.type}\n\n👨‍💼 Имя: ${data.name}\n\n📱 Номер телефона:\n\n ${formatNumber}\n\n 🏙 Город: ${data.select}\n\n-------------------------------------`).replace(/(\[[^\][]*]\(https[^()]*\))|[_*[\]()~>#+=|{}.!-]/gi, (x, y) => y || '\\' + x)
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
