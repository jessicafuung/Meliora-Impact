import React from "react";
import "./CaseStudyWater.css";
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";

export function CaseStudyWaterHeader() {
  return (
    <>
      <div className="header">
        {HeaderBox(
          "../../images/waterBackground.svg",
          "Water",
          "black",
          <p>
            <strong>
              <em>785 million</em>
            </strong>{" "}
            people in the world live{" "}
            <strong>
              <em>without</em>
            </strong>
            <br /> clean water. <br />
            <button style={{ margin: 105 }} className="consultationButton">
              <strong>Book a Consultation</strong>
            </button>
          </p>,
          "black"
        )}
      </div>
    </>
  );
}
