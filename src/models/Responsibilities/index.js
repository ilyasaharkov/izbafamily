import garden_house_icon from '/src/assets/images/Responsibilities/garden_house.png'
import garden_flowers_icon from '/src/assets/images/Responsibilities/garden_flowers.png'
import garden_cooking_icon from '/src/assets/images/Responsibilities/garden_cooking.png'
import shopping_icon from '/src/assets/images/Responsibilities/shopping.png'
import service_icon from '/src/assets/images/Responsibilities/service.png'
import minor_repairs_icon from '/src/assets/images/Responsibilities/minor_repairs.png'
import driver_icon from '/src/assets/images/Responsibilities/driver.png'
import pets_icon from '/src/assets/images/Responsibilities/pets.png'
import repair_icon from '/src/assets/images/Responsibilities/repair.png'
import children_icon from '/src/assets/images/Responsibilities/children.png'
import elderly_icon from '/src/assets/images/Responsibilities/elderly.png'
import pay_icon from '/src/assets/images/Responsibilities/pay.png'

export const ResponsibilitiesModel = {
    married_couple: {
        title: 'Обязанности семейной пары',
        cards: [
            { id: 0, title: 'Уход за домом и прилегающей территории', icon: garden_house_icon },
            { id: 1, title: 'Уход за растениями, садом и огородом', icon: garden_flowers_icon },
            { id: 2, title: 'Приготовление пищи и уборка посуды', icon: garden_cooking_icon },
            { id: 3, title: 'Закупка продуктов и предметов бытового назначения', icon: shopping_icon },
            { id: 4, title: 'Работа с сервисными службами', icon: service_icon },
            { id: 5, title: 'Мелкий ремонт', icon: minor_repairs_icon },
        ]
    },
    your_needs: {
        title: 'Обязанности формируются от ваших потребностей',
        cards: [
            { id: 0, title: 'Вождение автомобиля и обслуживание транспортных средств', icon: driver_icon },
            { id: 1, title: 'Уход за домашними животными', icon: pets_icon },
            { id: 2, title: 'Ремонт и обслуживание техники и инвентаря', icon: repair_icon },
            { id: 3, title: 'Уход за детьми. Организация досуга и развлечений', icon: children_icon },
            { id: 4, title: 'Уход за пожилыми родственниками или людьми с ограниченными возможностями', icon: elderly_icon },
            { id: 5, title: 'Оплата счетов', icon: pay_icon },
        ]
    }
}
