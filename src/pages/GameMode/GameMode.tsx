import React from 'react'
import { Section } from './styles'
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/title-logo.png'

export const GameMode = () => {
    return (
        <React.Fragment>
            <Section>
                <img src={mainLogo} />
                <Link to="/oneplayer-notime">Jugar solo</Link>
                <Link to="/two-players">Contra un amigo</Link>
            </Section>
        </React.Fragment>
    )
}
