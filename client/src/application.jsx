import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './application.css';
import { Home } from "./pages/Home/Home";
import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import theme from "./styling/theme";
import { WaterCases } from "./waterCases";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import Header from "./components/navbar";
import { Contact } from "./pages/contact";
import { KnowledgeCases } from "./knowledge";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { CorporateMember } from "./pages/CorporateMember/corporateMember";
import { Footer } from "./components/Footer/footer";
import { NonProfit } from "./pages/Non-profitMember/nonProfitMember";
import { FaqPage } from "./pages/Faq/Faq";
import { FaqQuestionCard } from "./components/FaqQuestionCard/FaqQuestionCard";

export function Application() {
  return (
    <ThemeProvider theme={theme}>
      <AnimationContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/corporate"} element={<CorporateMember />} />
            <Route path={"/nonprofit"} element={<NonProfit />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/faq"} element={<FaqPage />} />
            <Route path={"/privacy"} element={<PrivacyPage />} />
            <Route path={"/about"} element={<AboutUsPage />} />
            <Route path={"/water"} element={<WaterCases />} />
            <Route path={"/knowledge"} element={<KnowledgeCases />} />
          </Routes>
        </BrowserRouter>
      </AnimationContainer>
    </ThemeProvider>
  );
}
