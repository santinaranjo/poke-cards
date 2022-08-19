import React from "react";
import { useRecoilValue } from "recoil";
import { imagesContext } from "../../context/imagesContext";
import { GameCard } from "../GameCard/GameCard";

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

        setCardData(cards)
        console.log(cards)
    }, [])

    return(
        <React.Fragment>
            {
                cardData.map(value => <GameCard id={value.id} url={value.url} key={value.id} /> )
            }
        </React.Fragment>
    )
}