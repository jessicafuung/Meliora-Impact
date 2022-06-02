import React from "react";
import { Grid, Box, Container } from "@mui/material";
import "./benefits.css";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";
import { BtnWithHeadline } from "../../components/BtnWithHeadline/BtnWithHeadline";

export function Benefits() {
  return (
    <>
      {HeadlineWithUnderline("Benefits", 100, "#034F7A", 50, "#212121", "36px")}
      <div className="containerBenefits">
        <div className="widthContainerBenefits">
          <Box sx={{ flexGrow: 1 }}>
            <Container>
              <Grid
                container
                spacing={0}
                justifyContent="center"
                style={{ maxWidth: 1440, margin: "auto" }}
              >
                <Grid item xs={8} sm={6}>
                  <p>
                    <strong>
                      More nonprofits are going digital: payments, platforms,
                      marketing and storytelling are done and supported online.
                    </strong>
                    <br />
                    <br />
                    Individual donations via digital platforms have increased by
                    45% in 2020
                    <br /> in Norway alone.
                    <br />
                    <br />
                    This trend means that nonprofits need to spend time and
                    money to
                    <br /> develop those new solutions. Our platform gives the
                    nonprofits exactly
                    <br /> these tools (and more) for free, and ensures that
                    also smaller nonprofits
                    <br /> can be a part of the digitization without using up
                    their own resources.
                  </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <img
                      className="benefitsImg"
                      src={require("../../images/nonmemberprofit.svg")}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={10}>
                  <div className="joinUsDiv">
                    {BtnWithHeadline("Ready to get started?", "Join us")}
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </>
  );
}
