import { atom } from 'recoil'

export const gameCompletedContext = atom({
    key: 'gameCompletedContext',
    default: false,
})

export const gameRestartContext = atom({
    key: 'gameRestartContext',
    default: false,
})
