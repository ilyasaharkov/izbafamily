export const callBack = {
    fields: [
        {
            id: 0,
            code: 'name',
            placeholder: 'Напишите имя',
            title: '',
            error: { status: false, info: '*Поле имя не должно быть пустым' },
            answer: ''
        },
        {
            id: 1,
            code: 'phone',
            placeholder: 'Укажите номер телефона',
            title: '',
            error: { status: false, info: '*Введите весь номер телефона' },
            answer: ''
        },
    ],
    status: false,
    button: 'Оставить заявку',
    data: {}
}
