import { atom } from "recoil";

export const stopWatchContext = atom({
    key: "stopWatchContext",
    default: false
})

export const stopWatchTimeContext = atom({
    key: "stopWatchTimeContext",
    default: { min: "00", seg: "00" }
})