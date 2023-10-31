import garden_house_icon from "@/assets/images/Responsibilities/garden_house.webp";
import garden_flowers_icon from "@/assets/images/Responsibilities/garden_flowers.webp";
import garden_cooking_icon from "@/assets/images/Responsibilities/garden_cooking.webp";
import shopping_icon from "@/assets/images/Responsibilities/shopping.webp";
import service_icon from "@/assets/images/Responsibilities/service.webp";
import minor_repairs_icon from "@/assets/images/Responsibilities/minor_repairs.webp";

export const stepsWork = {
    title: 'Этапы работы с нами',
    cards: [
        {
            id: 1,
            title: 'Вам звонит наш менеджер и выясняет потребности',
            description: 'За вами будет закреплен персональный менеджер с которым вы обсудите все ваши пожелания к кандидатам и их функционал.',
            icon: garden_house_icon
        },
        {
            id: 2,
            title: 'Мы присылаем вам анкеты подходящих вам по параметрам кандидатов',
            description: 'Проводится подбор работников, наиболее подходящий под ваши пожелания. Формируем список резюме и предоставляем его вам.',
            icon: garden_flowers_icon
        },
        {
            id: 3,
            title: 'Проводим видеоконференцию с понравившимися кандидатами',
            description: 'С кандидатами, из предоставленного вам списка, проводим видеоконференцию. Вы сможете увидеть кандидатов онлайн, пообщаться и ними, задать любые интересующие вопросы и обсудить все нюансы. Таким образом вы сами выберете себе пару с которой вам будет комфортнее всего сотрудничать.',
            icon: garden_cooking_icon
        },
        {
            id: 4,
            title: 'Подписываем договор',
            description: 'Мы берем на себя юридические вопросы. Подготавливаем договор и присылаем человека для его подписания.  Оплата производится на моменте подписания договора - 50% от оговоренной зарплаты семейной пары. Оставшиеся 50% оплачиваются в конце первого месяца работы.',
            icon: shopping_icon },
        {
            id: 5,
            title: 'Даем месяц гарантии с заменой',
            description: 'Мы даем месяц гарантии на то что бы вы на практике убедились в том что выбранные кандидаты именно те, кого вы искали. Если семейная пара не будет соответствовать вашим ожианиям мы заменим ее без каких либо доплат.',
            icon: service_icon
        }
    ]
}
