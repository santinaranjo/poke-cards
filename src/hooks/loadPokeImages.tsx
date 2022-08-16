import React, { useEffect } from "react";
import { loadContext } from "../context/loadContext";
import { useLocalStorage } from "./useLocalStorage";

const URL_API = "https://pokeapi.co/api/v2/pokemon/"
const POKE_NAMES = [ "pikachu", "bulbasaur" ]

const findData = () => {
    const [ loading, setLoading ] = React.useState<boolean>(false)
    const [ pokeListUrl, setPokeListUrl ] = React.useState<Array<string>>([])

    const fetchData = async (list:Array<string>) => {
        const res = await Promise.all(list.map(u => fetch(`${URL_API}${u}`)))
        const jsons = await Promise.all(res.map(r => r.json()))
        const sprites = await Promise.all(jsons.map(s => s.sprites.other.dream_world.front_default))
        return sprites
    }

    useEffect(() => {
        fetchData(POKE_NAMES).then(res => {
            console.log(res)
            setPokeListUrl(res)
        })
    }, [])

    return { pokeListUrl }
}

export const LoadPokeImages = () => {

    const { pokeListUrl } = findData()

    return(
        <React.Fragment>
            <span>
                Hola
                {pokeListUrl}
            </span>
        </React.Fragment>
    )
}

