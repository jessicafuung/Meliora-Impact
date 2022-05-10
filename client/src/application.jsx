import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Header} from "./components/header";



export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Header />}/>
            </Routes>
        </BrowserRouter>
    )
}