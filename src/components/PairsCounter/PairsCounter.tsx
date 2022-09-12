import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
    flippedCardsContext,
    pairsCounterContext,
} from '../../context/cardContext'

export const PairsCounter = () => {
    const flippedCards = useRecoilValue(flippedCardsContext)
    const [flippedCardsNumber, setFlippedCardsNumber] =
        useRecoilState(pairsCounterContext)

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
            <span>{flippedCardsNumber}</span>
        </React.Fragment>
    )
}
