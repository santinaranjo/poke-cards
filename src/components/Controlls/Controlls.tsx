import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import {
    stopWatchContext,
    stopWatchTimeContext,
} from '../../context/stopWatchContext'
import {
    flippedCardsContext,
    cardsToValidateContext,
} from '../../context/cardContext'

export const Controlls = () => {
    const [stopWatchTime, setStopWatchTime] =
        useRecoilState(stopWatchTimeContext)
    const [stopWatchRunning, setStopWatchRunning] =
        useRecoilState<any>(stopWatchContext)
    const [flippedCards, setFlippedCards] =
        useRecoilState<any>(flippedCardsContext)
    const [cardsToValidate, setCardsToValidate] = useRecoilState<any>(
        cardsToValidateContext
    )

    const handleRestart = () => {
        setStopWatchRunning('restart')
    }

    return (
        <React.Fragment>
            <button onClick={() => setStopWatchRunning(false)}>Pausar</button>
            <button onClick={() => setStopWatchRunning(true)}>Reanudar</button>
            <button onClick={handleRestart}>Reiniciar</button>
        </React.Fragment>
    )
}
