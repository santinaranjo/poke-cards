import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
    endgameCardContext,
    endgameModeContext,
} from '../../context/endgameContext'
import { Controlls } from '../Controlls/Controlls'
import { Section } from './styles'
import { stopWatchTimeContext } from '../../context/stopWatchContext'

export const Endgame = (props: { playerWin?: any; restartOpt?: any }) => {
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)
    const [endgameMode, setEndgameMode] = useRecoilState(endgameModeContext)

    const stopWatchTime = useRecoilValue(stopWatchTimeContext)
    return (
        <React.Fragment>
            {endgameCard ? (
                <React.Fragment>
                    <Section>
                        <div>
                            {endgameMode === 'oneplayer' ? (
                                <React.Fragment>
                                    <p>{`Has tardado ${stopWatchTime.min}:${stopWatchTime.seg} mins`}</p>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <p>{`Ha ganado el ${props.playerWin}`}</p>
                                </React.Fragment>
                            )}

                            <Controlls
                                restartScore={props.restartOpt}
                                controllSelector="restart"
                            />
                            <Link to="/gamemode">Volver al Menu</Link>
                        </div>
                    </Section>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}
