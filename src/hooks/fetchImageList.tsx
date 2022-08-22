import React from "react"
import { useLocalStorage } from "./useLocalStorage"

export const fetchImageList = (apiURL: string, listOfURLs: Array<string>, localStorageKey: string) => {
    const [ data, setData ] = useLocalStorage(localStorageKey, [])
    const [ loading, setLoading ] = React.useState<Boolean>(true)

    const fetchBlobList = async (list: Array<string>) => {
        const res = await Promise.all(list.map(u => fetch(`${apiURL}${u}`)))
        const jsons = await Promise.all(res.map(r => r.json()))
        const sprites = await Promise.all(jsons.map(s => s.sprites.other.dream_world.front_default))
        const imageRes = await Promise.all(sprites.map(r => fetch(r)))
        const imageBlobs = await Promise.all(imageRes.map(r => r.blob()))
        const imageURLs = await Promise.all(imageBlobs.map(url => URL.createObjectURL(url)))
        return imageURLs
    }

    React.useEffect(() => {
        fetchBlobList(listOfURLs)
            .then(async res => {
                setData(res)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            })
    }, [])

    return { data, loading }
}