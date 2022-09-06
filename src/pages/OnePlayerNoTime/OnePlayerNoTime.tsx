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
import { Endgame } from '../../components/Endgame/Endgame'
import { endgameCardContext } from '../../context/endgameContext'

export const OnePlayerNoTime = () => {
    const stopWatchTime = useRecoilValue(stopWatchTimeContext)
    const [stopWatchRunning, setStopWatchRunning] =
        useRecoilState(stopWatchContext)
    const [gameCompleted, setGameCompleted] =
        useRecoilState(gameCompletedContext)
    const loading = createImageUrls()
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)

    React.useEffect(() => {
        if (gameCompleted) {
            setStopWatchRunning(false)
            console.log(`Has tardado ${stopWatchTime.min}:${stopWatchTime.seg}`)
            setEndgameCard(true)
        }
    }, [gameCompleted])

    React.useEffect(() => {
        setStopWatchRunning(true)
        setEndgameCard(false)
    }, [])

    return (
        <React.Fragment>
            {loading ? (
                'Cargando...'
            ) : (
                <React.Fragment>
                    <div>
                        Tiempo: <StopWatch />
                    </div>
                    <div>
                        {' '}
                        Parejas encontradas: <PairsCounter />
                        /8{' '}
                    </div>
                    <GameGrid />
                    <Controlls controllSelector="" />
                    <Endgame />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}
