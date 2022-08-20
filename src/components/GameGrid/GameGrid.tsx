import React from "react";
import { useRecoilValue } from "recoil";
import { imagesContext } from "../../context/imagesContext";
import { GameCard } from "../GameCard/GameCard";
import { Section } from "./styles"

interface CardState {
    id: number;
    url: string;
}

export const GameGrid = () => {
    const imageURLs = useRecoilValue(imagesContext)
    const [ cardData, setCardData ] = React.useState<Array<CardState>>([])

    React.useEffect(() => {
        let cards = []

        for (let index = 0; index < imageURLs.length; index++) {
            const element = imageURLs[index];
            cards.push({ id: index, url: element })
        }

        let duplicatedCards = cards.flatMap(value => [ value, value ])

        let shuffledCards = duplicatedCards
            .map(value => ({ value, sort: Math.random() }))
            .sort(( a,b ) => a.sort - b.sort)
            .map(({ value }) => value)

        setCardData(shuffledCards)
        console.log(duplicatedCards)
    }, [])

    return(
        <Section>
            {
                cardData.map((value, index) => <GameCard id={value.id} url={value.url} key={`card-${index}`} /> )
            }
        </Section>
    )
}