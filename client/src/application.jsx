import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./pages/Home/Home";
import {Test} from "./components/test";
import {Contact} from "./contact";
import TestPage from "./pages/TestPage";
import {FaqPage} from "./pages/FaqPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styling/theme";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import Header from "./components/navbar";
import {AboutUsPage} from "./pages/AboutUsPage";

export function Application() {
    return (
        <ThemeProvider theme={theme}>
        <AnimationContainer>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/test"} element={<TestPage />}/>
                <Route path={"/faq"} element={<FaqPage />}/>
                <Route path={"/about"} element={<AboutUsPage/>}/>
            </Routes>
        </BrowserRouter>
        </AnimationContainer>
        </ThemeProvider>
    )
}