import React from 'react'
import { GameGrid } from '../../components/GameGrid/GameGrid'
import { Controlls } from '../../components/Controlls/Controlls'
import { PairsCounter } from '../../components/PairsCounter/PairsCounter'
import { useRecoilState, useRecoilValue } from 'recoil'
import { gameCompletedContext } from '../../context/gameContext'
import { createImageUrls } from '../../hooks/createImageUrls'
import { Endgame } from '../../components/Endgame/Endgame'
import { endgameCardContext } from '../../context/endgameContext'
import { Timer } from '../../components/Timer/Timer'
import { timerTimeContext } from '../../context/timerContext'

export const OnePlayerByLevels = () => {
    const [gameCompleted, setGameCompleted] =
        useRecoilState(gameCompletedContext)
    const loading = createImageUrls()
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)
    const [timerTime, setTimerTime] = useRecoilState(timerTimeContext)
    const [level, setLevel] = React.useState(0)

    React.useEffect(() => {
        if (gameCompleted) {
            setEndgameCard(true)
        }
    }, [gameCompleted])

    React.useEffect(() => {
        setEndgameCard(false)
        setTimerTime({ min: '01', seg: '11' })
    }, [])

    return (
        <React.Fragment>
            {loading ? (
                'Cargando...'
            ) : (
                <React.Fragment>
                    <div>
                        <Timer />
                    </div>
                    <div>
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
