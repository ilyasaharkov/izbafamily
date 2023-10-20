import free_icon from '../../assets/images/Prices/free.webp'
import escort_icon from '../../assets/images/Prices/escort.webp'
import vip_icon from '../../assets/images/Prices/vip.webp'

export const pricesModel = {
    title: 'Тарифы',
    info: [
        {
            id: 0,
            icon: free_icon,
            title: 'Бесплатно',
            offers: [
                { id: 0, title: 'Бесплатный подбор семейной пары.' },
                { id: 1, title: 'Инструктаж и знакомство.' },
                { id: 2, title: 'Подготовка договорных отношений.' },
            ]
        },
        {
            id: 1,
            icon: escort_icon,
            title: 'Сопровождение',
            offers: [
                {id: 0, title: 'Личный менеджер от нашего агенства по всем пожеланиям и вопросам.'},
                {id: 1, title: 'Полный контроль за работой семейной парой от нашего агентства.'},
            ]
        },
        {
            id: 2,
            icon: vip_icon,
            title: 'Индивидуально',
            offers: [
                {id: 0, title: 'Индивидуальный подбор специалиста(ов)'},
                {id: 1, title: 'Все ваши любые пожелания и запросы - наша задача и реализация.'},
            ]
        },
    ],
    button: 'Оставить заявку'
}
