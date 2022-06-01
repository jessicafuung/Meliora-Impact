import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { sectors } from "../../components/SectorCard/sectors";
import { SectorCard } from "../../components/SectorCard/sectorCard";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";

export function Cases() {
  return (
    <>
      <div style={{ marginTop: 50 }} />
      {HeadlineWithUnderline("Cases", 80, "#034F7A", 0, "#212121", "36px")}
      <Grid container justifyContent="center" paddingTop={5}>
        <Grid item xs={12} sm={4}>
          <Container>
            A lot of giving platforms leave us with the paradox of choice. Many
            corporate giving systems don't thoroughly vet the projects and
            nonprofits that are featured.
            <br />
            <br />
            Our platform has two categories: knowledge and water. We know that
            these two areas are vital to thriving societies—this is why our
            portfolio focuses on them.
          </Container>
        </Grid>
      </Grid>
      <Box paddingBottom={{ xs: 5, md: 15 }} px={{ xs: 2 }} paddingTop={5}>
        <Grid container justifyContent="center" spacing={6}>
          {sectors.map((sector) => (
            <Grid item lg={4.1} xs={12} sm={6} md={5}>
              <SectorCard
                key={sector.title}
                title={sector.title}
                content={sector.content}
                image={sector.image}
                linkTo={sector.linkTo}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
