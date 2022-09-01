import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { endgameCardContext } from '../../context/endgameContext'
import { Controlls } from '../Controlls/Controlls'
import { Section } from './styles'

export const Endgame = () => {
    const [endgameCard, setEndgameCard] = useRecoilState(endgameCardContext)
    return (
        <React.Fragment>
            {endgameCard ? (
                <React.Fragment>
                    <Section>
                        <div>
                            <Controlls controllSelector="restart" />
                            <Link to="/gamemode">Volver al Menu</Link>
                        </div>
                    </Section>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}
