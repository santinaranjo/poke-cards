import React from "react";
import { useRecoilState } from "recoil";
import { timerContext, timerTimeContext } from "../../context/timerContext";

export const Timer = () => {

    const [ timerRunning, setTimerRunning ] = useRecoilState(timerContext)
    const [ timerTime, setTimerTime ] = useRecoilState(timerTimeContext)

    React.useEffect(() => {
        if (Number(timerTime.seg) === 0) {
            setTimerRunning(false)
        } else {
            setTimerRunning(true)
        }
    }, [timerTime])

    React.useEffect(() => {
        let timeInterval: any

        if (timerRunning) {
            let timeSec = Number(timerTime.seg)
            let timeMin = Number(timerTime.min)
            timeInterval = setInterval(() => {
                timeSec--
                let showTime = { min: "", seg: "" }
                if (timeSec < 10) {
                    showTime.seg = `0${timeSec}`
                } else if ( timeSec < 60 ) {
                    showTime.seg = `${timeSec}`
                } else {
                    timeSec = 0
                    showTime.seg = "00"
                    timeMin--
                }
                if (timeMin < 10) {
                    showTime.min = `0${timeMin}`
                } else {
                    showTime.min = `${timeMin}`
                }
                setTimerTime({ min: `${showTime.min}`, seg: `${showTime.seg}` })
            }, 1000)
        } else if (!timerRunning) {
            clearInterval(timeInterval)
        }
        return () => clearInterval(timeInterval)
    }, [timerRunning])

    return(
        <React.Fragment>
            <span>{`${timerTime.min}:${timerTime.seg}`}</span>
            <button onClick={() => {
                setTimerTime({min: "00", seg: "12"})
            }}>Setear 12 seg</button>
        </React.Fragment>
    )
}