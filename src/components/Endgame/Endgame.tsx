import React from 'react'
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
                            <p>Volver al Menu</p>
                        </div>
                    </Section>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    )
}
