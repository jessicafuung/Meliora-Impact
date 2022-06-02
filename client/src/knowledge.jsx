import React from "react";
import "./styling/case.css";
import { Container, Grid, Typography } from "@mui/material";
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
      {HeadlineWithUnderline(
        "Global Issue",
        175,
        "#034f7a",
        "0",
        "#212121",
        "36px"
      )}
      <Container>
        <Grid container marginTop={"2rem"}>
          <Grid item xs={12}>
            <Typography id={"text"}>
              759 million adults are illiterate and do not have the awareness
              necessary to improve both their living conditions and those for
              their children. Without skills for lifelong learning, children
              face greater barriers to earning potential and employment later in
              life. They are more likely to suffer adverse health outcomes and
              less likely to participate in the decisions that affect them –
              threatening their ability to build a better future for themselves
              and their communities.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        gap={1}
        justifyContent={"space-evenly"}
        sx={{ marginTop: "2rem", marginBottom: "10rem" }}
      >
        {data.map((knowledge) => (
          <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
        ))}
      </Grid>
    </div>
  );
}

function KnowledgeCard({ knowledge: { name, info } }) {
  return (
    <>
      <Grid item xs={12} sm={12} md={5} sx={{ marginTop: "2rem" }}>
        {HeadlineWithUnderline(name, 215, "#034F7A", "2rem", "#034F7A", "28px")}
        {info.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </Grid>
    </>
  );
}

function InfoCard({ info: { title, description, imagetext, image } }) {
  return (
    <>
      {image && <img src={image} id={"image"} alt={"Image"} />}
      <Container>
        <Typography id={"imageText"}>{imagetext}</Typography>
        <Typography id={"head"}>{title}</Typography>
        <Typography>{description}</Typography>
      </Container>
    </>
  );
}
