import React from "react";
import { Card } from "./styles";

export const GameCard = () => {
    const [ flip, setFlip ] = React.useState(false)

    const handleClick = () => setFlip(!flip)

    React.useEffect(() => {
        console.log(flip)
    }, [ flip ])

    return(
        <Card onClick={handleClick}>
            <div className={`card${flip ? "-flip" : ""}`}>
                <div className="front">Pa lante</div>
                <div className="back">Pa tras</div>
            </div>
        </Card>
    )
}