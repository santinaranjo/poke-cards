import React from "react";
import { Card } from "./styles";
import { useRecoilValue } from "recoil";
import { cardContextFlip } from "../../context/cardContext"

interface GameCardParams {
    id: number;
    url: string;
    onClick: Function;
}

export const GameCard = (card: GameCardParams) => {
    const { flip } = useRecoilValue(cardContextFlip)

    return(
        <Card onClick={card.onClick}>
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