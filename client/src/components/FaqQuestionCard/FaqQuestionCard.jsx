import React from "react";
import { useState } from "react";
import "./FaqQuestionCard.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export function FaqQuestionCard({ faqs: { _id, question, answer}, index }) {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
    console.log(selected + index);
  };
  return (
    <div className="accordion">
      <div className="item">
        <div className="title" onClick={() => toggle(index)}>
          <h1>
            <strong>{index+1}. {question}</strong>
          </h1>
          <span>
            {selected === index ? (
              <RemoveCircleOutlineIcon style={{ color: "#034F7A" }} />
            ) : (
              <AddCircleOutlineIcon style={{ color: "#034F7A" }} />
            )}
          </span>
        </div>
        <div className={selected === index ? "content show" : "content"}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
