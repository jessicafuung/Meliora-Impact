import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./pages/Home/Home";
import TestPage from "./pages/TestPage";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styling/theme";
import { ListCases } from "./listCases";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import Header from "./components/navbar";
import { Contact } from "./pages/contact";
import { KnowledgeCases } from "./knowledge";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { GetFaq } from "./pages/Faq/Faq";
import { CorporateMember } from "./pages/CorporateMember/corporateMember";
import { Footer } from "./components/Footer/footer";

export function Application() {
  return (
    <ThemeProvider theme={theme}>
      <AnimationContainer>
        <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/"} element={<CorporateMember />} />
            <Route path={"/test"} element={<TestPage />} />
            <Route path={"/faq"} element={<FaqPage />} />
            <Route path={"/privacy"} element={<PrivacyPage />} />
            <Route path={"/about"} element={<AboutUsPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AnimationContainer>
    </ThemeProvider>
  );
}
