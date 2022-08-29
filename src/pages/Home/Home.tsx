import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { fetchImageList } from '../../hooks/fetchImageList'
import { LoadingGame } from '../../components/LoadingGame/LoadingGame'
import { useRecoilState } from 'recoil'
import { imagesContext } from '../../context/imagesContext'
import { createImageUrls } from '../../hooks/createImageUrls'

export const Home = () => {
    const loading = createImageUrls()

    return (
        <React.Fragment>
            {loading ? <LoadingGame /> : <Navigate to="/gamemode" />}
        </React.Fragment>
    )
}
