import React from "react";
import { Card } from "./styles";
import { useRecoilState } from "recoil";
import { flippedCardsContext, cardsToValidateContext } from "../../context/cardContext"

interface GameCardParams {
    sharedId: number;
    uniqueId: number;
    url: string;
    findCardPair: Function;
}

export const GameCard = (card: GameCardParams) => {
    const [ flip, setFlip ] = React.useState(false)
    const [ flippedCards, setFlippedCards ] = useRecoilState<any>(flippedCardsContext)

    const pushToFlippedCards = () => {
        let newArray: Array<Object> = [...flippedCards]
        newArray.push({ uniqueId: card.uniqueId })
        setFlippedCards(newArray)
    }

    const handleClick = () => {
        if (flip) {
            console.log("Ya esta pa arriba")
        } else {
            setFlip(true)
            pushToFlippedCards()
        }
        card.findCardPair()
        console.log(`Click en card: sharedId-${card.sharedId} uniqueId-${card.uniqueId}`)
    }

    const checkFlipped = () => {
        const findFlip = flippedCards.find( (element: { uniqueId: number; })  => element.uniqueId === card.uniqueId )

        if (findFlip) {
            console.log("ta dentro del estado flipped")
            setFlip(true)
        } else {
            setFlip(false)
        }
    }

    React.useEffect(() => {
        checkFlipped()
    }, [ flippedCards ])

    return(
        <Card onClick={handleClick}>
            <div className={`card${flip ? "-flip" : ""}`}>
                <div className="front">
                    Pa lante
                </div>
                <div className="back">
                    <img src={card.url} />
                </div>
            </div>
        </Card>
    )
}