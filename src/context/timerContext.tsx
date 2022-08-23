import { atom } from "recoil";

export const timerContext = atom({
    key: "timerContext",
    default: false
})

export const timerTimeContext = atom({
    key: "timerTimeContext",
    default: { min: "00", seg: "00" }
})