import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home/Home";
import { Contact } from "./contact";
import TestPage from "./pages/TestPage";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styling/theme";
import { ListCases } from "./listCases";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import Header from "./components/navbar";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import { AboutUsPage } from "./pages/AboutUsPage";

export function Application() {
  return (
    <ThemeProvider theme={theme}>
      <AnimationContainer>
        <BrowserRouter>
          <Routes>
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/faq"} element={<FaqPage />} />
            <Route path={"/privacy"} element={<PrivacyPage />} />
            <Route path={"/about"} element={<AboutUsPage />} />
          </Routes>
        </BrowserRouter>
      </AnimationContainer>
    </ThemeProvider>
  );
}
