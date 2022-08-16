import React from "react";
import { Link } from "react-router-dom";
import { LoadPokeImages } from "../hooks/loadPokeImages";

export const Home = () => {
    return(
        <React.Fragment>
            <Link to={"/gamemode"}>Jugar</Link>
            <LoadPokeImages />
        </React.Fragment>

    )
}