import React from 'react'
import { flushSync } from 'react-dom'
import { useLocalStorage } from './useLocalStorage'

export const fetchImageList = (
    apiURL: string,
    listOfURLs: Array<string>,
    localStorageKey: string
) => {
    const [data, setData] = useLocalStorage(localStorageKey, [])
    const [loading, setLoading] = React.useState<any>(true)

    const fetchBlobList = async (list: Array<string>) => {
        const res = await Promise.all(list.map((u) => fetch(`${apiURL}${u}`)))
        const jsons = await Promise.all(res.map((r) => r.json()))
        const sprites = await Promise.all(
            jsons.map((s) => s.sprites.other.dream_world.front_default)
        )
        const imageRes = await Promise.all(sprites.map((r) => fetch(r)))
        const imageBlobs = await Promise.all(imageRes.map((r) => r.blob()))
        return imageBlobs
    }

    React.useEffect(() => {
        fetchBlobList(listOfURLs).then((res) => {
            flushSync(() => {
                setData(res)
            })
            setLoading(false)
        })
    }, [])

    return { data, loading }
}
