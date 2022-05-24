import React from "react";
import "./CaseStudyKnowledge.css";

export function CaseStudyKnowledgeHeader() {
  return (
    <>
      <div className="headers">
        <div>
          <p className="headlines">
            <strong>Knowledge</strong>
          </p>
          <p className="descriptions">
            More than
            <strong>
              {" "}
              <em>72 million</em>
            </strong>{" "}
            children of <br /> primary education age are{" "}
            <strong>
              <em>not</em>
            </strong>{" "}
            in school.
          </p>
        </div>
        <button className="consultationButton">
          <strong>Book a Consultation</strong>
        </button>
      </div>
    </>
  );
}
