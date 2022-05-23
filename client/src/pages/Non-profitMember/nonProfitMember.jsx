import React from "react";
import "./nonProfitMember.css";
import { Benefits } from "./benefits";
import { Services } from "./services";
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";
export function NonProfit() {
  return (
    <>
        {HeaderBox(
            "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969",
            <h1>Non-profit <em>members</em></h1>,
            "white",
            <p>There's often no solid <strong><em>philanthropic</em></strong> strategy and <strong><em>nonprofits</em></strong> are picked on an <strong><em>ad-hoc basis.</em></strong></p>,
            "white"
        )}
      <div style={{ height: 100 }} />
      <Benefits />
      <div style={{ height: 100 }} />
      <Services />
      <div style={{ height: 100 }} />
      <img src={require("../../images/Footer.svg")} width={"100%"} />
    </>
  );
}
