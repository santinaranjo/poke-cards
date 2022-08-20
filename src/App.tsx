import React from "react";
import { Home } from "./pages/Home/Home";
import { GameMode } from "./pages/GameMode/GameMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";

// Temporal para dev
import { GameGrid } from "./components/GameGrid/GameGrid";


export const App = () => {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
                <Route path="/gamegrid" element={<GameGrid />} />
            </Routes>
        </BrowserRouter>
    )
}