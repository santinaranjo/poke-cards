import React from 'react'
import { Navigate } from 'react-router-dom'
import { LoadingGame } from '../../components/LoadingGame/LoadingGame'
import { createImageUrls } from '../../hooks/createImageUrls'

export const Home = () => {
    const loading = createImageUrls()

    return (
        <React.Fragment>
            {loading ? <LoadingGame /> : <Navigate to="/gamemode" />}
        </React.Fragment>
    )
}
