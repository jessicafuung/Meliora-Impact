import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Test} from "./components/test";
import {CalendarFn, BookingFn, Start} from "./pages/booking";
import Favicon from "react-favicon";

export function Application() {
    return (
        <BrowserRouter>
            <Favicon url="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/227509003_347695716998483_8567291070362624778_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=_gR5gtrT4x8AX_omtVZ&_nc_ht=scontent.fosl1-1.fna&oh=00_AT9K7qTrruXXjvwjWK8AkhkaNft2gk0mrLTZt0VMQ68KEA&oe=628008AE" />
            <Routes>
                <Route path={"/"} element={<Test />}/>
                <Route path={"/booking"} element={<Start />}/>
            </Routes>
        </BrowserRouter>
    )
}