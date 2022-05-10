import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";
import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar/Navbar";
export function Application() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/test"} element={<TestPage />}/>
            </Routes>
        </BrowserRouter>
    )
}