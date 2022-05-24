import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { CustomEmployeeCard } from "../components/CustomEmployeeCard/CustomEmployeeCard";
import { useEffect, useState } from "react";
import "../styling/about.css";
import { HeadlineWithUnderline } from "../components/HeadlineWithUnderline/headlineWithUnderline";

export function AboutUsPage() {
  const { loading, error, data } = useLoader(async () =>
    fetchJSON("/api/employees")
  );

  if (loading) {
    return <div>Loading ...</div>;
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
    <Box>
      <Grid container alignItems="center" justifyContent="center" mb={4}>
        <Grid item>
          <Typography variant="h2">About us</Typography>
          {HeadlineWithUnderline(200, "#034F7A")}
        </Grid>
      </Grid>
      <Grid
        container
        gap={15}
        alignItems="center"
        justifyContent="center"
        mb={25}
      >
        <Grid item className="aboutSection">
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
            The majority of consumers choose companies that give back. But while
            many companies don't have an impactful philanthropic strategy, many
            nonprofits don't have the resources for an engaging digital
            presence.
          </Typography>
          <Typography paragraph>
            This is where Meliora Impact comes in: We're creating a more
            intimate connection between donor and cause, building a service that
            is accessible, strategic and effective, and that allows nonprofits
            to carry out their frontline work.
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={require("../images/office-ladies.png")}
            height="auto"
            alt="image"
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" mb={25}>
        <Grid item mb={4}>
          <Typography text-align="center" variant="h2">
            Our team
          </Typography>
          {HeadlineWithUnderline(210, "#034F7A")}
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

export function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function load() {
    try {
      setLoading(true);
      setData(await loadingFn());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);
  return { loading, data, error, reload: load };
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load ${res.status}: ${res.statusText}`);
  }
  return await res.json();
}
