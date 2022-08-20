import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { imagesContext } from "../../context/imagesContext";
import { cardContextFlip } from "../../context/cardContext"
import { GameCard } from "../GameCard/GameCard";
import { Section } from "./styles"

interface CardState {
    sharedId: number;
    url: string;
}

export const GameGrid = () => {
    const imageURLs = useRecoilValue(imagesContext)
    const [ cardData, setCardData ] = React.useState<Array<CardState>>([])
    const [ cardContextData, setCardContextData ] = useRecoilState(cardContextFlip)

    const findCardPair = () => {
        console.log(`se da click en una card`)
        setCardContextData({ flip: (!cardContextData.flip) })
    }

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

        setCardData(shuffledCards)
        console.log(cardsWithId)
    }, [])

    return(
        <Section>
            {
                cardData.map((value, index) => <GameCard findCardPair={findCardPair} id={value.sharedId} url={value.url} key={`card-${index}`} /> )
            }
        </Section>
    )
}