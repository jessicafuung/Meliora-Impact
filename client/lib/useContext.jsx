import React from "react";
import { fetchJSON } from "./fetchJSON";
import { postJSON } from "./postJSON";

export const ApiContext = React.createContext({
  async postBooking(booking) {
    /* / POST req to /api/bookings */
    return await postJSON("/api/bookings", booking);
  },
  async listTimes(query) {
    /* / GET req to /api/bookings (with filter) */
    return await fetchJSON("/api/bookings?" + new URLSearchParams(query));
  },
});
