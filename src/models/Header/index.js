import logo from "../../assets/images/logo.webp";

export const headerObject = {
  icon: logo,
  id: 'header',
  menu: [
    { id: 0, name: "Семейные пары", active: false, code: 'family' },
    { id: 1, name: "Безопасность", active: false, code: 'safety' },
    { id: 2, name: "Тарифы", active: false, code: 'price' },
    { id: 3, name: "Отзывы", active: false, code: 'reviews' },
    { id: 4, name: "Хочу у вас работать", active: false, code: 'work' },
  ],
  contacts: [{ id: 0, name: "+7(980)209-94-10" }],
};
