import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {HeaderWater} from "./components/headerWater";
import Navbar from "./components/navbar";



export function Application() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<HeaderWater />}/>
            </Routes>
        </BrowserRouter>
    )
}