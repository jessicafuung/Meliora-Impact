import React from "react";
import "./nonProfitMember.css";
import { Benefits } from "./benefits";
import { Services } from "./services";
import {HeaderBox} from "../../components/HeaderBox/HeaderBox";
export function NonProfit() {
  return (
    <>
      <div className="header">
          {HeaderBox(
              <h1 style={{
                  color: "white",
                  fontFamily: "Montserrat",
              }}>Non-profit members</h1>,
              <p style={{
                  color: "white",
                  fontFamily: "Montserrat",
              }}>hello text</p>
          )}
      </div>
      <div style={{ height: 100 }} />
      <Benefits />
      <div style={{ height: 100 }} />
      <Services />
      <div style={{ height: 100 }} />
      <img src={require("../../images/Footer.svg")} width={"100%"} />
    </>
  );
}
