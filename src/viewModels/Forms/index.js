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
    const type = type_form[$type]
    data = callBackFormViewObject.fields.reduce((acc, item) => {
        acc[item.code] = item.answer;
        return acc;
    }, {});
    data.type = type
    const result = getFormatTextForTelegram()
    api.tgBotSender('lead', result)
    console.log('sendDataForm', result)
}

const getFormatTextForTelegram = () => {
    return (`-----------------------------------------\n\n✅ Новая заявка от клиента\n\nТип формы: ${data.type}\n\nИмя: ${data.name}\n\nНомер телефона: ${data.phone}\n\n-----------------------------------------`).replace(/(\[[^\][]*]\(https[^()]*\))|[_*[\]()~>#+=|{}.!-]/gi, (x, y) => y || '\\' + x)
}

export {
    callBackFormViewObject,
    sendDataForm
};
