import React from "react";
import { useRecoilState } from "recoil";
import { stopWatchContext, stopWatchTimeContext } from "../../context/stopWatchContext";

export const StopWatch = () => {
    const [ stopWatchRunning, setStopWatchRunning ] = useRecoilState(stopWatchContext)
    const [ stopWatchTime, setStopWatchTime ] = useRecoilState(stopWatchTimeContext)

    React.useEffect(() => {
        let timeInterval: any
        if (stopWatchRunning) {
            let timeSec = 0
            let timeMin = 0
            timeInterval = setInterval(() => {
                timeSec++
                let showTime = { min: "", seg: "" }
                if (timeSec < 10) {
                    showTime.seg = `0${timeSec}`
                } else if ( timeSec < 60 ) {
                    showTime.seg = `${timeSec}`
                } else {
                    timeSec = 0
                    showTime.seg = "00"
                    timeMin++
                }
                if (timeMin < 10) {
                    showTime.min = `0${timeMin}`
                } else {
                    showTime.min = `${timeMin}`
                }
                setStopWatchTime({ min: `${showTime.min}`, seg: `${showTime.seg}` })
            }, 1000)
        } else if (!stopWatchRunning) {
            clearInterval(timeInterval)
        }
        return () => clearInterval(timeInterval)
    }, [stopWatchRunning])

    React.useEffect(() => {
        setStopWatchTime({ min: `00`, seg: `00` })
    }, [])

    return(
        <React.Fragment>
            <span>{`${stopWatchTime.min}:${stopWatchTime.seg}`}</span>
        </React.Fragment>
    )
}