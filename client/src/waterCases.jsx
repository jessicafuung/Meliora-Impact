import { useEffect, useState } from "react";
import "./styling/case.css";
import { Typography } from "@mui/material";
import { CaseStudyWaterHeader } from "./pages/CaseStudyWater/CaseStudyWaterHeader";
import { HeadlineWithUnderline } from "./components/HeadlineWithUnderline/headlineWithUnderline";

function useLoading(loadingFunction) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  async function load() {
    try {
      setLoading(true);
      setData(await loadingFunction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { loading, error, data };
}

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
      {HeadlineWithUnderline("Limited access", 215, "#034f7a")}
      <Typography id={"text"}>
        That’s nearly 1 in 10 worldwide. Or, twice the population of the United
        States. The majority live in isolated rural areas and spend hours every
        day walking to collect water for their family. Not only does walking for
        water keep children out of school or take up time that parents could be
        using to earn money, but the water often carries diseases that can make
        everyone sick. But access to clean water means education, income and
        health - especially for women and kids.
      </Typography>
      <div className={"list"}>
        {data.map((organization) => (
          <OrganizationCard
            key={organization.id}
            organizations={organization}
          />
        ))}
      </div>
    </div>
  );
}

function OrganizationCard({ organizations: { name, info } }) {
  return (
    <>
      <div className={"organization"}>
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

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`failed to load${res.status}: ${res.statusText}`);
  }
  return await res.json();
}