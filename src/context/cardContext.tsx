import { atom } from 'recoil'

export const flippedCardsContext = atom({
    key: 'flippedCardsContext',
    default: [],
})

export const cardsToValidateContext = atom({
    key: 'cardsToValidateContext',
    default: [],
})

export const activeCardsContext = atom({
    key: 'activeCardsContext',
    default: false,
})
