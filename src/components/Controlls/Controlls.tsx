import React from 'react'
import { useRecoilState } from 'recoil'
import {
    stopWatchContext,
    stopWatchTimeContext,
} from '../../context/stopWatchContext'
import {
    flippedCardsContext,
    cardsToValidateContext,
} from '../../context/cardContext'
import { flushSync } from 'react-dom'

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
        flushSync(() => {
            setStopWatchRunning('restart')
            setFlippedCards([])
            setCardsToValidate([])
        })
        setStopWatchRunning(true)
    }

    return (
        <React.Fragment>
            <button onClick={() => setStopWatchRunning(false)}>Pausar</button>
            <button onClick={() => setStopWatchRunning('play')}>
                Reanudar
            </button>
            <button onClick={handleRestart}>Reiniciar</button>
        </React.Fragment>
    )
}
