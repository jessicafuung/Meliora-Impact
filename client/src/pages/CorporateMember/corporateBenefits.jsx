import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./corporateBenefits.css";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";

export function CorporateBenefits() {
  return (
    <>
      {HeadlineWithUnderline("Benefits", 100, "#034F7A", 100)}

      <Box
        sx={{ flexGrow: 1 }}
        style={{
          maxWidth: 1240,
          margin: "auto",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <p className="textCorporateBenefits">
              By using Meliora Impact's platform, companies can leverage their
              corporate resources for greater social good.
              <br />
              <br />
              Donors who choose our platform get access to carefully selected
              nonprofits and projects to support, will receive inside stories
              about the projects and will see how their donations make an
              impact.
              <br />
              <br />
              Donors get access to engaging reports on their philanthropic
              activity, continuously updated dashboards, and of course have full
              control over their donations.
              <br />
              <br />
              In addition, corporate donors can sign up to receive a
              philanthropic strategy fully tailored to their business and
              values.
            </p>
            <h1
              style={{
                marginTop: 80,
                marginBottom: 20,
                fontSize: 30,
                textAlign: "center",
              }}
            >
              Ready to get started?
            </h1>
            <button className={"joinUsBtnBenefits"}>Join us</button>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img
                className="dashboardImg"
                style={{
                  display: "block",
                  marginLeft: "auto",
                }}
                src={require("../../images/InsightDesktop.svg")}
              />
            </div>
            <div style={{ marginTop: 30 }}>
              <img
                className="vettedNpoImg"
                style={{
                  display: "block",
                  marginRight: "auto",
                }}
                src={require("../../images/20vettednpo.svg")}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}