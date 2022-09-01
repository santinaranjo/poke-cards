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
import { activeCardsContext } from '../../context/cardContext'
import { gameRestartContext } from '../../context/gameContext'

export const Controlls = () => {
    const [stopWatchRunning, setStopWatchRunning] =
        useRecoilState<any>(stopWatchContext)
    const [flippedCards, setFlippedCards] =
        useRecoilState<any>(flippedCardsContext)
    const [cardsToValidate, setCardsToValidate] = useRecoilState<any>(
        cardsToValidateContext
    )
    const [activeCards, setActiveCards] =
        useRecoilState<any>(activeCardsContext)
    const [gameRestart, setGameRestart] = useRecoilState(gameRestartContext)

    const handleRestartClick = () => {
        flushSync(() => {
            setStopWatchRunning('restart')
            setFlippedCards([])
            setCardsToValidate([])
            setTimeout(() => setGameRestart(true), 300)
        })
        setStopWatchRunning(true)
    }

    const handlePauseClick = () => {
        setStopWatchRunning(false)
        setActiveCards(true)
    }

    const handleResumeClick = () => {
        setStopWatchRunning('play')
        setActiveCards(false)
    }

    return (
        <React.Fragment>
            <button onClick={handlePauseClick}>Pausar</button>
            <button onClick={handleResumeClick}>Reanudar</button>
            <button onClick={handleRestartClick}>Reiniciar</button>
        </React.Fragment>
    )
}
