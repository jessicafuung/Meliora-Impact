import React from "react";
import { fetchJSON } from "./fetchJSON";
import { postJSON } from "./postJSON";

export const ApiContext = React.createContext({
    async postBooking(booking) {
        return await postJSON("/api/bookings", booking)
    }
});