export const callBack = {
    fields: [
        {
            id: 0,
            code: 'input',
            placeholder: 'Ваше имя',
            title: '',
            error: { status: false, info: '*Поле имя не должно быть пустым' },
            answer: ''
        },
        {
            id: 1,
            code: 'phone',
            placeholder: '+7 (###) ###-##-##',
            title: '',
            error: { status: false, info: '*Введите весь номер телефона' },
            answer: ''
        },
        {
            id: 2,
            code: 'select',
            placeholder: 'Выберите город',
            list: ['Санкт-Петербург', 'Москва', 'Лен.область', 'Моск.Область'],
            title: '',
            error: { status: false, info: '*Выберите город' },
            answer: ''
        }
    ],
    status: false,
    button: 'Оставить заявку',
    data: {}
}
