import React from "react";
import "./styling/case.css";
import { Typography } from "@mui/material";
import { CaseStudyKnowledgeHeader } from "./pages/CaseStudyKnowledge/CaseStudyKnowledgeHeader";
import { HeadlineWithUnderline } from "./components/HeadlineWithUnderline/headlineWithUnderline";
import { fetchJSON } from "../lib/fetchJSON";
import { useLoading } from "../lib/useLoader";

export function KnowledgeCases() {
  const { loading, error, data } = useLoading(async () => {
    return fetchJSON("/api/knowledge");
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  return (
    <div>
      <CaseStudyKnowledgeHeader />
      <div style={{ marginTop: 100 }} />
      {HeadlineWithUnderline("Global Issue", 175, "#034f7a")}
      <Typography id={"text"}>
        759 million adults are illiterate and do not have the awareness
        necessary to improve both their living conditions and those for their
        children. Without skills for lifelong learning, children face greater
        barriers to earning potential and employment later in life. They are
        more likely to suffer adverse health outcomes and less likely to
        participate in the decisions that affect them – threatening their
        ability to build a better future for themselves and their communities.
      </Typography>
      <div className={"list"}>
        {data.map((knowledge) => (
          <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
        ))}
      </div>
    </div>
  );
}

function KnowledgeCard({ knowledge: { name, info } }) {
  return (
    <>
      <div className={"knowledge"}>
        <Typography id={"headline"}>{name}</Typography>
        {info.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </>
  );
}

function InfoCard({ info: { title, description, imagetext, image } }) {
  return (
    <>
      {image && <img src={image} id={"image"} alt={"Image"} />}
      <Typography id={"imageText"}>{imagetext}</Typography>
      <Typography id={"head"}>{title}</Typography>
      <Typography>{description}</Typography>
    </>
  );
}
