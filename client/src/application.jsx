import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./pages/Home/Home";
import {Test} from "./components/test";
import TestPage from "./pages/TestPage";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styling/theme";
import AnimationContainer from "./components/AnimationContainer/AnimationContainer";
import Header from "./components/navbar";
import {BeTheChange} from "./components/BeTheChange/beTheChange";
import {PartnerCard} from "./components/PartnerCard/partnerCard";
import {NonProfit} from "./pages/Non-profitMember/nonProfitMember";
import {Benefits} from "./pages/Non-profitMember/benefits";
import {Services} from "./pages/Non-profitMember/services";
import {CorporateMember} from "./pages/CorporateMember/corporateMember";
import {CorporateBenefits} from "./pages/CorporateMember/corporateBenefits";
import {CorporateServices} from "./pages/CorporateMember/corporateServices";

export function Application() {
    return (
        <ThemeProvider theme={theme}>
        <AnimationContainer>
        <BrowserRouter>

            <Routes>
                <Route path={"/"} element={<CorporateMember/>}/>
                <Route path={"/test"} element={<TestPage />}/>
            </Routes>
        </BrowserRouter>
        </AnimationContainer>
        </ThemeProvider>
    )
}