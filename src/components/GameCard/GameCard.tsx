import React from "react";
import { Card } from "./styles";

interface GameCardParams {
    id: number;
    url: string;
}

export const GameCard = (card: GameCardParams) => {
    const [ flip, setFlip ] = React.useState(false)

    const handleClick = () => setFlip(!flip)

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