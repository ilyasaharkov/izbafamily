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

const sendDataForm = async ($type) => {
    console.log('sendDataForm')
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
            window.open('https://izbafamily.ru/thank-you', '_self');
        })
        .catch(error => {
            console.log('error', error)
            api.tgBotSender('report', '[Ошибка]: Не удалось отправить форму.')
                .then()
                .catch()
        })

    await fetchAuthLogin({ email: 'test@test.com', password: '123' })
}

export const fetchAuthLogin = async (data) => {
    try {
        const response = await fetch(`https://vast-cyan-tortoise-gown.cyclic.app/api/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('response', response)
            const result = await response.json();
            // Сохранение токена в sessionStorage
            // sessionStorage.setItem('token', result.token);
            // window.location.assign('/dashboard');
        } else {
            return response;
        }
    } catch (error) {
        console.error('Ошибка при запросе:', error);
    }
};

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
    return (`-------------------------------------\n\n✅ Новая заявка от клиента\n\n❓ Тип формы: ${data.type}\n\n👨‍💼 Имя: ${data.input}\n\n📱 Номер телефона:\n\n ${formatNumber}\n\n 🏙 Город: ${data.select}\n\n-------------------------------------`).replace(/(\[[^\][]*]\(https[^()]*\))|[_*[\]()~>#+=|{}.!-]/gi, (x, y) => y || '\\' + x)
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
