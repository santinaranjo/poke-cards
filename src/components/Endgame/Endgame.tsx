import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { endgameCardContext } from '../../context/endgameContext'
import { Controlls } from '../Controlls/Controlls'
import { Section } from './styles'
import { stopWatchTimeContext } from '../../context/stopWatchContext'

export const Endgame = () => {
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)
    const stopWatchTime = useRecoilValue(stopWatchTimeContext)

    return (
        <React.Fragment>
            {endgameCard ? (
                <React.Fragment>
                    <Section>
                        <div>
                            <p>{`Has tardado ${stopWatchTime.min}:${stopWatchTime.seg} mins`}</p>
                            <Controlls controllSelector="restart" />
                            <Link to="/gamemode">Volver al Menu</Link>
                        </div>
                    </Section>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}
