import React from 'react'
import { Section } from './styles'
import { Link } from 'react-router-dom'

export const GameMode = () => {
    return (
        <React.Fragment>
            <Section>
                <Link to="/oneplayer-notime">Jugar</Link>
            </Section>
        </React.Fragment>
    )
}
