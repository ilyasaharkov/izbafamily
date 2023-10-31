import icon_info from '../../assets/images/Contacts/info.webp'
import icon_phone from '../../assets/images/Contacts/phone.webp'
import icon_clock from '../../assets/images/Contacts/clock.webp'

export const checkingCouplesModel = {
    title: 'Подбор персонала через агентство – это надежно и выгодно',
    subtitle: 'Приглашая сотрудника из нашего агентства, вы оплачиваете лишь его заработную плату в полном объеме. В финансовом отношении это то же самое, если бы вы наняли человека напрямую',
    offer: 'Только, в отличие от людей «с улицы», в профессиональных качествах, опыте и благонадежности нашего персонала вы можете быть уверены на 100%.',
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
