import React from "react";
import { Card } from "./styles";
// import { useRecoilValue } from "recoil";
// import { cardContextFlip } from "../../context/cardContext"

interface GameCardParams {
    sharedId: number;
    uniqueId: number;
    url: string;
    findCardPair: Function;
}

export const GameCard = (card: GameCardParams) => {
    // const { flip } = useRecoilValue(cardContextFlip)
    const [ flip, setFlip ] = React.useState(false)

    const handleClick = () => {
        card.findCardPair()
        setFlip(!flip)
        console.log(`Click en card: sharedId-${card.sharedId} uniqueId-${card.uniqueId}`)
    }

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