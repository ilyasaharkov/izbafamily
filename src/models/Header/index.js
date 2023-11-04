import logo from "../../assets/images/logo.webp";
import icon_phone from '../../assets/images/Contacts/phone.webp'

export const headerObject = {
  icon: logo,
  id: 'header',
  menu: [
    { id: 0, name: "Семейные пары", active: false, code: 'family', link: false },
    { id: 1, name: "Этапы работы", active: false, code: 'steps', link: false },
    { id: 2, name: "Обязанности семейной пары", active: false, code: 'responsibilities', link: false },
    { id: 2, name: "Отзывы", active: false, code: 'reviews', link: false },
    // { id: 4, name: "Хочу у вас работать", active: false, code: '/vacancy/', link: true },
  ],
  contacts: [{ id: 0, icon: icon_phone, name: "+7(980)209-94-10" }],
};
