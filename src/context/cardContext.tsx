import { atom } from "recoil";

export const flippedCards = atom({
    key: "flippedCards",
    default: []
})

export const cardsToValidate = atom({
    key: "cardsToValidate",
    default: []
})