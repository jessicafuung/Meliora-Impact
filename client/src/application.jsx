import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";
import {Booking} from "./pages/booking";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/booking"} element={<Booking />}/>
            </Routes>
        </BrowserRouter>
    )
}