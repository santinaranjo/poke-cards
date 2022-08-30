import React from 'react'
import { GameGrid } from '../../components/GameGrid/GameGrid'
import { StopWatch } from '../../components/StopWatch/StopWatch'
import { Controlls } from '../../components/Controlls/Controlls'
import { PairsCounter } from '../../components/PairsCounter/PairsCounter'
import {
    stopWatchContext,
    stopWatchTimeContext,
} from '../../context/stopWatchContext'
import { useRecoilState, useRecoilValue } from 'recoil'
import { gameCompletedContext } from '../../context/gameContext'
import { createImageUrls } from '../../hooks/createImageUrls'

export const OnePlayerNoTime = () => {
    const stopWatchTime = useRecoilValue(stopWatchTimeContext)
    const [stopWatchRunning, setStopWatchRunning] =
        useRecoilState(stopWatchContext)
    const [gameCompleted, setGameCompleted] =
        useRecoilState(gameCompletedContext)
    const loading = createImageUrls()

    React.useEffect(() => {
        if (gameCompleted) {
            setStopWatchRunning(false)
            console.log(`Has tardado ${stopWatchTime.min}:${stopWatchTime.seg}`)
        }
    }, [gameCompleted])

    React.useEffect(() => {
        setStopWatchRunning(true)
    }, [])

    const handlePauseClick = () => {
        setStopWatchRunning(false)
    }

    return (
        <React.Fragment>
            {loading ? (
                'Cargando...'
            ) : (
                <React.Fragment>
                    <div>
                        <StopWatch />
                    </div>
                    <PairsCounter />
                    <GameGrid />
                    <Controlls />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}
