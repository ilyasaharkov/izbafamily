import logo from "../../assets/images/logo.webp";

export const headerObject = {
  icon: logo,
  id: 'header',
  menu: [
    { id: 0, name: "Семейные пары", active: false, code: 'family', link: false },
    { id: 2, name: "Тарифы", active: false, code: 'price', link: false },
    { id: 3, name: "Отзывы", active: false, code: 'reviews', link: false },
    { id: 4, name: "Хочу у вас работать", active: false, code: '/vacancy/', link: true },
  ],
  contacts: [{ id: 0, name: "+7(980)209-94-10" }],
};
