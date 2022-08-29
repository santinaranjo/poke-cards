import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { imagesContext } from '../context/imagesContext'
import { fetchImageList } from './fetchImageList'

const URL_API = 'https://pokeapi.co/api/v2/pokemon/'
const POKE_NAMES = [
    'pikachu',
    'bulbasaur',
    'charmander',
    'charizard',
    'squirtle',
    'caterpie',
    'rattata',
    'pidgey',
]
const LOCAL_STORAGE_KEY = 'POKE_DATA'

export const createImageUrls = () => {
    const { data, loading } = fetchImageList(
        URL_API,
        POKE_NAMES,
        LOCAL_STORAGE_KEY
    )
    const [imageURLs, setImageURLs] = useRecoilState<any>(imagesContext)

    const loadImageUrls = async () => {
        const res = await Promise.all(
            data.map((url: any) => URL.createObjectURL(url))
        )
        return res
    }

    useEffect(() => {
        loadImageUrls().then((res) => {
            setImageURLs(res)
        })
    }, [data])

    return loading
}
