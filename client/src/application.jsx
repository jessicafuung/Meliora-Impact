import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";
import {ListCases} from "./listCases";

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/cases"} element={<ListCases/>}/>
            </Routes>
        </BrowserRouter>
    )
}