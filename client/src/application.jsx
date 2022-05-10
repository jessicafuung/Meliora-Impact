import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";
import {Contact} from "./contact";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/contact"} element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}