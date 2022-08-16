import React from "react";
import { Home } from "./pages/Home";
import { GameMode } from "./pages/GameMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gamemode" element={<GameMode />} />
            </Routes>
        </BrowserRouter>
    )
}