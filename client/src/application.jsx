import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./pages/Home/Home";
import {Test} from "./components/test";
import {Contact} from "./contact";

export function Application() {
    return (
        <ThemeProvider theme={theme}>
        <AnimationContainer>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/contact"} element={<Contact />}/>
            </Routes>
        </BrowserRouter>
        </AnimationContainer>
        </ThemeProvider>
    )
}