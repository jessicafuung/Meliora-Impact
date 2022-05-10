import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";
import TestPage from "./pages/TestPage";
export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/test"} element={<TestPage />}/>
            </Routes>
        </BrowserRouter>
    )
}