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
import { LoadingGame } from '../../components/LoadingGame/LoadingGame'
import { Main, Data, SectionControlls } from './styles.js'
import { endgameModeContext } from '../../context/endgameContext'

export const OnePlayerNoTime = () => {
    const stopWatchTime = useRecoilValue(stopWatchTimeContext)
    const [stopWatchRunning, setStopWatchRunning] =
        useRecoilState(stopWatchContext)
    const [gameCompleted, setGameCompleted] =
        useRecoilState(gameCompletedContext)
    const loading = createImageUrls()
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)
    const [endgameMode, setEndgameMode] = useRecoilState(endgameModeContext)

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
        setEndgameMode('oneplayer')
    }, [])

    return (
        <React.Fragment>
            {loading ? (
                <LoadingGame />
            ) : (
                <Main>
                    <Data>
                        <div>
                            Tiempo: <StopWatch />
                        </div>
                        <div>
                            {' '}
                            Parejas encontradas: <PairsCounter />
                            /8{' '}
                        </div>
                    </Data>
                    <GameGrid />
                    <SectionControlls>
                        <Controlls controllSelector="" />
                    </SectionControlls>
                    <Endgame />
                </Main>
            )}
        </React.Fragment>
    )
}
