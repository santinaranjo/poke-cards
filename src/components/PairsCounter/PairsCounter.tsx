import React from 'react'
import { useRecoilValue } from 'recoil'
import { flippedCardsContext } from '../../context/cardContext'

export const PairsCounter = () => {
    const flippedCards = useRecoilValue(flippedCardsContext)
    const [flippedCardsNumer, setFlippedCardsNumber] = React.useState(0)

    React.useEffect(() => {
        if (flippedCards.length > 1) {
            const flippedCardsCounter = Math.trunc(flippedCards.length / 2)
            setFlippedCardsNumber(flippedCardsCounter)
        } else if (flippedCards.length === 0) {
            setFlippedCardsNumber(0)
        }
    }, [flippedCards])

    return (
        <React.Fragment>
            <span>{flippedCardsNumer}</span>
        </React.Fragment>
    )
}
