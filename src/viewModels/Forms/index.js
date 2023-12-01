import { reactive } from "vue";
import { callBack } from "../../models/Forms/";
import { api } from "@/api";

const callBackFormViewObject = reactive(callBack);
let data = reactive({})
const fetchLoad = reactive({
    loading: false,
    success: false
})

let type_form = {
    request: 'Консультируем бесплатно',
    middle: 'Появились вопросы?',
    footer: 'Остались вопросы?',
}

const sendDataForm = async ($type) => {
    if (fetchLoad.loading) return

    fetchLoad.loading = true

    if(!checkValidForm()) return
    const type = type_form[$type]
    data = callBackFormViewObject.fields.reduce((acc, item) => {
        acc[item.key] = item.answer;
        acc.client = null
        acc.status = false
        return acc;
    }, {});
    data.type = type
    callBackFormViewObject.status = true
    const result = getFormatTextForTelegram()
    console.log('result', result)
    try {
        api.tgBotSender('lead', result)
            .then(() => {
                clearAllFields()
            })
            .catch(error => {
                console.log('error', error)
                api.tgBotSender('report', '[Ошибка]: Не удалось отправить форму.')
                    .then()
                    .catch()
            })
        const response = await fetch("https://vast-cyan-tortoise-gown.cyclic.app/api/leads/create", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            clearAllFields()
            fetchLoad.loading = false
            fetchLoad.success = true
        } else {
            fetchLoad.loading = false
            return console.log('[Ошибка]: Не удалось отправить данные')
        }
    } catch (error) {
        fetchLoad.loading = false
        console.error("Ошибка при запросе:", error);
    }


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
    return (`-------------------------------------\n\n✅ Новая заявка от клиента\n\n❓ Тип формы: ${data.type}\n\n👨‍💼 Имя: ${data.name}\n\n📱 Номер телефона:\n\n ${formatNumber}\n\n 🏙 Город: ${data.city}\n\n-------------------------------------`).replace(/(\[[^\][]*]\(https[^()]*\))|[_*[\]()~>#+=|{}.!-]/gi, (x, y) => y || '\\' + x)
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
    fetchLoad,
    callBackFormViewObject,
    sendDataForm
};
