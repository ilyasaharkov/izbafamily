import icon_info from '../../assets/images/Contacts/info.webp'
import icon_phone from '../../assets/images/Contacts/phone.webp'
import icon_clock from '../../assets/images/Contacts/clock.webp'

export const checkingCouplesModel = {
    title: 'Проверка семейных пар',
    subtitle: 'Вам кажется: «несложная это работа — семейная пара с проживанием». Однако,' +
        ' к подбору будущих хранителей вашего дома мы подходим очень внимательно. Желая взять на работу семейную пару с проживанием, стоит довериться опыту нашего агентства.',
    offer: 'Кроме того, каждый кандидат проверяется нашей Службой безопасности. Опытные специалисты отберут тех соискателей, ' +
        'кто наиболее полно соответствуют Вашим требованиям, указанным в заявке. И только после этого кандидаты встретятся с вами, чтобы вы могли принять окончательное решение.',
    button: 'Оставить заявку',
    contacts: [
        {
            id: 0,
            type: 'text',
            icon: icon_info,
            info: 'Семейная пара - это надежные помощники, которые ' +
                'обеспечат безопасность и комфорт вашей семье в загородном доме. Обратитесь к нам за подбором семейной пары и получите комплексный сервис по уходу за домом и участком.'
        },
        {
            id: 1,
            type: 'phone',
            icon: icon_phone,
            info: '+7 (980) 209-94-10'
        },
        {
            id: 2,
            type: 'text',
            icon: icon_clock,
            info: 'пн. - вс., 09:00 - 21:00'
        },
    ]
}
