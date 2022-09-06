import React from 'react'
import { Home } from './pages/Home/Home'
import { GameMode } from './pages/GameMode/GameMode'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { OnePlayerNoTime } from './pages/OnePlayerNoTime/OnePlayerNoTime'

//Dev
import { StopWatch } from './components/StopWatch/StopWatch'

export const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
                <Route path="/oneplayer-notime" element={<OnePlayerNoTime />} />
                //Dev
                <Route path="/stopwatch" element={<StopWatch />} />
            </Routes>
        </BrowserRouter>
    )
}
