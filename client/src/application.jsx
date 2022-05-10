import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Test />}/>
            </Routes>
        </BrowserRouter>
    )
}