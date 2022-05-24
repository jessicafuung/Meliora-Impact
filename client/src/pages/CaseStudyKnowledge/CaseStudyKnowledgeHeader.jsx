import React from "react";
import "./CaseStudyKnowledge.css";
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";

export function CaseStudyKnowledgeHeader() {
  return (
    <>
      <div className="headers">
        {HeaderBox(
          "../../images/knowledgeBackground.png",
          "Knowledge",
          "white",
          <p>
            More than{" "}
            <strong>
              <em>72 million</em>
            </strong>{" "}
            children of
            <br />
            primary education age are{" "}
            <strong>
              <em>not</em>
            </strong>{" "}
            in school.
            <br />
            <button style={{ margin: 100 }} className="consultationButton">
              <strong>Book a Consultation</strong>
            </button>
          </p>,
          "white"
        )}
      </div>
    </>
  );
}
