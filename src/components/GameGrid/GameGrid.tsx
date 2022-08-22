import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { imagesContext } from "../../context/imagesContext";
import { GameCard } from "../GameCard/GameCard";
import { Section } from "./styles"
import { flippedCardsContext } from "../../context/cardContext"
import { gameCompletedContext } from "../../context/gameContext"

interface CardState {
    uniqueId: number;
    sharedId: number;
    url: string;
}

export const GameGrid = () => {
    const imageURLs = useRecoilValue(imagesContext)
    const [ cardData, setCardData ] = React.useState<Array<CardState>>([])
    const flippedCards = useRecoilValue(flippedCardsContext)
    const [ gameCompleted, setGameCompleted ] = useRecoilState(gameCompletedContext)


    const findCardPair = () => {
        console.log(`se da click en una card`)
    }

    React.useEffect(() => {
        if (flippedCards.length === 16) {
            setGameCompleted(true)
            console.log("Has completado el juego")
        }
    }, [flippedCards])

    React.useEffect(() => {
        let cards = []

        for (let index = 0; index < imageURLs.length; index++) {
            const element = imageURLs[index];
            cards.push({ sharedId: index, url: element })
        }

        let duplicatedCards = cards.flatMap(value => [ value, value ])

        let shuffledCards = duplicatedCards
            .map(value => ({ value, sort: Math.random() }))
            .sort(( a,b ) => a.sort - b.sort)
            .map(({ value }) => value)


        let cardsWithId = []

        for (let index = 0; index < shuffledCards.length; index++) {
            const element = shuffledCards[index];
            cardsWithId.push({ uniqueId: index, sharedId: element.sharedId, url: element.url })
        }

        setCardData(cardsWithId)
    }, [])

    return(
        <Section>
            {
                cardData.map((value, index) => <GameCard findCardPair={findCardPair} sharedId={value.sharedId} uniqueId={value.uniqueId} url={value.url} key={`card-${index}`} /> )
            }
        </Section>
    )
}