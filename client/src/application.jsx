import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./pages/Home/Home";
import {Contact} from "./contact";
import TestPage from "./pages/TestPage";
import {FaqPage} from "./pages/FaqPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styling/theme";
import {ListCases} from "./listCases";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import Header from "./components/navbar";
import {Contact} from './contact';

export function Application() {
    return (
        <ThemeProvider theme={theme}>
        <AnimationContainer>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/test"} element={<TestPage />}/>
                <Route path={"/faq"} element={<FaqPage />}/>
            </Routes>
        </BrowserRouter>
        </AnimationContainer>
        </ThemeProvider>
    )
}