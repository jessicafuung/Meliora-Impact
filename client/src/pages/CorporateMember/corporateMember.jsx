import React from "react";
import "./corporateMember.css";
import { CorporateBenefits } from "./corporateBenefits";
import { CorporateServices } from "./corporateServices";

export function CorporateMember() {
  return (
    <div>
      <div className="corporateHeader">
        <div>
          <p className="top">t</p>
          <p className="headline">
            <strong>
              Corporate <em>members</em>
            </strong>
          </p>
          <p className="description">
            Joining Meloria Impact gives you access to a <em>broad variety</em>
            <br />
            of <em>helpful tools</em> for tracking, statistics & more
          </p>
        </div>
      </div>
      <div style={{ height: 100 }} />
      <CorporateBenefits />
      <div style={{ height: 100 }} />
      <CorporateServices />
      <div style={{ height: 100 }} />
      <img src={require("../../images/Footer.svg")} width={"100%"} />
    </div>
  );
}
