import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { CalendarFn, BookingFn, Start } from "./pages/booking";
import "./application.css";
import { Home } from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import theme from "./styling/theme";
import { WaterCases } from "./waterCases";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import { Contact } from "./pages/Contact/contact";
import { KnowledgeCases } from "./knowledge";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { CorporateMember } from "./pages/CorporateMember/corporateMember";
import { Footer } from "./components/Footer/Footer";
import { NonProfit } from "./pages/Non-profitMember/nonProfitMember";
import { FaqPage } from "./pages/Faq/Faq";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Cases } from "./pages/Cases/Cases";
import BreadcrumbComponent from "./components/Breadcrumbs/breadcrumbs";

export function Application() {
  return (
    <ThemeProvider theme={theme}>
      <AnimationContainer>
        <BrowserRouter>
          <Navbar />
          <BreadcrumbComponent />
          <ScrollToTop>
            <Routes>
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"/corporate"} element={<CorporateMember />} />
              <Route path={"/nonprofit"} element={<NonProfit />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/faq"} element={<FaqPage />} />
              <Route path={"/privacy"} element={<PrivacyPage />} />
              <Route path={"/about"} element={<AboutUsPage />} />
              <Route path={"/water"} element={<WaterCases />} />
              <Route path={"/knowledge"} element={<KnowledgeCases />} />
              <Route path={"/booking"} element={<Start />} />
              <Route path={"/cases"} element={<Cases />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </BrowserRouter>
      </AnimationContainer>
    </ThemeProvider>
  );
}
