import { atom } from 'recoil'

export const endgameCardContext = atom({
    key: 'endgameCardContext',
    default: false,
})

export const endgameModeContext = atom({
    key: 'endgameModeContext',
    default: 'oneplayer',
})
