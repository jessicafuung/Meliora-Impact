import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {HeaderWater} from "./components/headerWater";
import Navbar from "./components/navbar";
import {HeaderFrontPage} from "./components/headerFrontPage";
import {PartnerCard} from "./components/partnerCard";
import {BeTheChange} from "./components/beTheChange";



export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<BeTheChange />}/>
            </Routes>
        </BrowserRouter>
    )
}