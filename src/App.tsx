import React from 'react'
import { Home } from './pages/Home/Home'
import { GameMode } from './pages/GameMode/GameMode'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { OnePlayerNoTime } from './pages/OnePlayerNoTime/OnePlayerNoTime'
import { TwoPlayers } from './pages/TwoPlayers/TwoPlayers'
// Dev
import { LoadingGame } from './components/LoadingGame/LoadingGame'

export const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
                <Route path="/oneplayer-notime" element={<OnePlayerNoTime />} />
                <Route path="/two-players" element={<TwoPlayers />} />
                // Dev
                <Route path="/loading" element={<LoadingGame />} />
            </Routes>
        </BrowserRouter>
    )
}
