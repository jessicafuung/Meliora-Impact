import React from "react";
import { useState } from "react";
import "./FaqQuestionCard.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export function FaqQuestionCard({ faqs: { _id, question, answer } }) {
  const [selected, setSelected] = useState(null);
  const toggle = (_id) => {
    if (selected === _id) {
      return setSelected(null);
    }
    setSelected(_id);
    console.log(selected + _id);
  };
  return (
    <div className="accordion">
      <div className="item">
        <div className="title" onClick={() => toggle(_id)}>
          <h1>
            <strong>{question}</strong>
          </h1>
          <span>
            {selected === _id ? (
              <RemoveCircleOutlineIcon style={{ color: "#034F7A" }} />
            ) : (
              <AddCircleOutlineIcon style={{ color: "#034F7A" }} />
            )}
          </span>
        </div>
        <div className={selected === _id ? "content show" : "content"}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
