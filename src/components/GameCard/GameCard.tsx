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
    const [ cardsToValidate, setCardsToValidate ] = useRecoilState<any>(cardsToValidateContext)

    const pushToFlippedCards = () => {
        let newArray: Array<Object> = [...flippedCards]
        newArray.push({ uniqueId: card.uniqueId })
        setFlippedCards(newArray)
    }

    const pushToValidateContext = () => {
        let newArray: Array<Object> = [...cardsToValidate]
        newArray.push({ uniqueId: card.uniqueId, sharedId: card.sharedId })
        setCardsToValidate(newArray)
    }

    const removeUnmatchedCards = () => {
        let newArray: Array<Object> = [...flippedCards]
        const firstIndex = newArray.findIndex((value: any) => value.uniqueId === cardsToValidate[0].uniqueId)
        
        newArray.splice(firstIndex, 1)
        setFlip(false)
        setFlippedCards(newArray)
    }

    const handleClick = () => {
        if (flip) {
            console.log("Ya esta pa arriba")
        } else {
            if (cardsToValidate.length === 2) {
                console.log("Se estan validando cartas")
            } else if (cardsToValidate.length === 1) {
                setFlip(true)
                setCardsToValidate((oldList: any) => [
                    ...oldList,
                    {
                        value: "dummyObject"
                    }
                ])
                setTimeout(() => {
                    if (cardsToValidate[0].sharedId === card.sharedId) {
                        setCardsToValidate([])
                        pushToFlippedCards()
                    } else {
                        removeUnmatchedCards()
                        setCardsToValidate([])
                    }
                }, 500)
            } else {
                setFlip(true)
                pushToFlippedCards()
                pushToValidateContext()
                console.log(cardsToValidate)
            }
            
        }
        card.findCardPair()
        console.log(`Click en card: sharedId-${card.sharedId} uniqueId-${card.uniqueId}`)
    }

    const checkFlipped = () => {
        const findFlip = flippedCards.find( (element: { uniqueId: number; })  => element.uniqueId === card.uniqueId )

        if (findFlip) {
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