import React from "react";
import { fetchJSON } from "./fetchJSON";
import { postJSON } from "./postJSON";

export const ApiContext = React.createContext({
  async listFaq(query) {
    return await fetchJSON("/api/faqs?" + new URLSearchParams(query));
  },
});
