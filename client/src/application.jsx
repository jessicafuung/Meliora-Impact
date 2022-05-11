import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {BeTheChange} from "./components/beTheChange";
import {Test} from "./components/test";
import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styling/theme";

export function Application() {
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<BeTheChange />}/>
                <Route path={"/test"} element={<TestPage />}/>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    )
}