
import React from "react";
import ReactDOM from "react-dom";
import {NonProfit} from "../src/pages/Non-profitMember/nonProfitMember";


describe("Nonprofit page", () => {
    it("shows nonprofit page", () => {
        const domElement = document.createElement("div");
        ReactDOM.render(<NonProfit />, domElement);
        expect(domElement.innerHTML).toMatchSnapshot();
    });
});