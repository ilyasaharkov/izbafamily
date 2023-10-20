import {computed, ref} from "vue";
import { ourCouplesModel } from "@/models/OurСouples";

const ourCouplesModelViewObject = ref(ourCouplesModel);
const { cards } = ourCouplesModelViewObject.value
const listCard = ref([])

// Получаем список карточек при первой иницилизации
const getFirstListCard = (index = 3) => {
    listCard.value = cards.slice(0, index)
}

// Подгружаем еще карточки
const loadMoreCards = () => {
    const remainingCards = cards.slice(listCard.value.length, cards.length);
    const nextStepCards = remainingCards.slice(0, 3);
    listCard.value = [...listCard.value, ...nextStepCards];
};

// Проверяем все ли карточки загрузились
const checkLastItemInListCard =
    computed(() => {
        return listCard.value.length === cards.length
    })



export {
    checkLastItemInListCard,
    ourCouplesModelViewObject,
    listCard,
    getFirstListCard,
    loadMoreCards
};
