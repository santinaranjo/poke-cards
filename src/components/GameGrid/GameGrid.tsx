import React from "react";
import { useRecoilValue } from "recoil";
import { imagesContext } from "../../context/imagesContext";
import { GameCard } from "../GameCard/GameCard";

export const GameGrid = () => {
    const imageURLs = useRecoilValue(imagesContext)


    return(
        <React.Fragment>
            <GameCard />
        </React.Fragment>
    )
}