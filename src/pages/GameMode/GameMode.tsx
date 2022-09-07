import React from 'react'
import { Section } from './styles'
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/title-logo.png'

export const GameMode = () => {
    return (
        <React.Fragment>
            <Section>
                <img src={mainLogo} />
                <Link to="/oneplayer-notime">Jugar</Link>
            </Section>
        </React.Fragment>
    )
}
