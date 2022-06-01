//import { Undefined } from './undefined';
import React from "react";
import { Typography, Container, CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CustomEmployeeCard } from "../components/CustomEmployeeCard/CustomEmployeeCard";
import { HeadlineWithUnderline } from "../components/HeadlineWithUnderline/headlineWithUnderline";
import { fetchJSON } from "../assets/fetchJSON";
import { useLoading } from "../../lib/useLoader";

export function AboutUsPage() {
  const { loading, error, data } = useLoading(async () =>
    fetchJSON("/api/employees")
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
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
    <Box mt={10}>
      <Grid container alignItems="center" justifyContent="center" mb={4}>
        <Grid item>
          {HeadlineWithUnderline("About us", 120, "#212121", 30, '#212121', '36px')}
        </Grid>
      </Grid>
      <Container maxWidth={"lg"} sx={{ marginBottom: "8rem" }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6} className="aboutSection">
            <Typography variant="h6" style={{ marginBottom: "30px" }}>
              Our vision
            </Typography>
            <Typography paragraph>
              Meliora Impact is a Norwegian female-founded startup changing
              corporate giving and the way companies and nonprofits connect.
            </Typography>
            <Typography paragraph>
              We envision giving to be impactful and universal, and that
              nonprofits can fully focus on their frontline work.
            </Typography>
            <Typography paragraph>
              The majority of consumers choose companies that give back. But
              while many companies don't have an impactful philanthropic
              strategy, many nonprofits don't have the resources for an engaging
              digital presence.
            </Typography>
            <Typography paragraph>
              This is where Meliora Impact comes in: We're creating a more
              intimate connection between donor and cause, building a service
              that is accessible, strategic and effective, and that allows
              nonprofits to carry out their frontline work.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <img
              src={require("../images/office-ladies.png")}
              style={{ objectFit: "contain", width: "100%" }}
              alt="image"
            />
          </Grid>
        </Grid>
      </Container>
      <Grid container alignItems="center" justifyContent="center" mb={25}>
        <Grid item mb={4}>
          {HeadlineWithUnderline("Our team", 120, "#034F7A", 20, '#212121', '36px')}
        </Grid>
        <Grid
          container
          gap={12}
          alignItems="start"
          justifyContent="center"
          className="containerSection"
        >
          {data.map((employee) => (
            <CustomEmployeeCard key={employee.name} employee={employee} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

function SpinningAnimation({}) {
  return (
    <Container
      sx={{
        border: "2px red solid",
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </Container>
  );
}
