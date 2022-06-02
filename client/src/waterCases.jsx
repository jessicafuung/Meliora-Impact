import React from "react";
import { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { CaseStudyWaterHeader } from "./pages/CaseStudyWater/CaseStudyWaterHeader";
import { HeadlineWithUnderline } from "./components/HeadlineWithUnderline/headlineWithUnderline";
import { useLoading } from "../lib/useLoader";
import { fetchJSON } from "../lib/fetchJSON";

export function WaterCases() {
  const { loading, error, data } = useLoading(async () => {
    return fetchJSON("/api/water");
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
      <CaseStudyWaterHeader />
      <div style={{ marginTop: 100 }}></div>
      {HeadlineWithUnderline(
        "Limited access",
        215,
        "#034f7a",
        0,
        "#212121",
        "36px"
      )}
      <Container>
        <Grid container marginTop={"2rem"}>
          <Grid item xs={12}>
            <Typography>
              That’s nearly 1 in 10 worldwide. Or, twice the population of the
              United States. The majority live in isolated rural areas and spend
              hours every day walking to collect water for their family. Not
              only does walking for water keep children out of school or take up
              time that parents could be using to earn money, but the water
              often carries diseases that can make everyone sick. But access to
              clean water means education, income and health - especially for
              women and kids.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/*This is going to be a Grid container*/}

      <Grid
        container
        gap={1}
        justifyContent={"space-evenly"}
        sx={{ marginTop: "2rem", marginBottom: "10rem" }}
      >
        {data.map((water) => (
          <OrganizationCard key={water.id} water={water} />
        ))}
      </Grid>
    </div>
  );
}

function OrganizationCard({ water: { name, info } }) {
  return (
    <>
      {/*Grid item or grid container, not sure*/}

      <Grid item xs={12} sm={12} md={5} sx={{ marginTop: "2rem" }}>
        {HeadlineWithUnderline(name, 215, "#034F7A", "2rem", "#034F7A", "28px")}

        {info.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </Grid>
    </>
  );
}

{
  /*Content for each organization*/
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
