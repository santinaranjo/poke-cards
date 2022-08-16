import React from "react";
import { Link, Navigate } from "react-router-dom";
import { fetchImageList } from "../hooks/fetchImageList";
import { LoadingGame } from "./LoadingGame";

const URL_API = "https://pokeapi.co/api/v2/pokemon/"
const POKE_NAMES = [ "pikachu", "bulbasaur", "charmander", "charizard", "squirtle", "caterpie", "rattata", "pidgey" ]
const LOCAL_STORAGE_KEY = "POKE_DATA"

export const Home = () => {
    const { data, loading } = fetchImageList(URL_API, POKE_NAMES, LOCAL_STORAGE_KEY)


    return(
        <React.Fragment>
            {
                loading
                    ?   <LoadingGame />
                    :   <Navigate to="/gamemode" />
            }
        </React.Fragment>
    )
}