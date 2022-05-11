import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
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
                <Route path={"/"} element={<Test />}/>
                <Route path={"/test"} element={<TestPage />}/>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    )
}