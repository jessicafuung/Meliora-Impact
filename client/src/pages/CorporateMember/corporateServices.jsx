import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./corporateServices.css";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";

export function CorporateServices() {
  return (
    <>
      {HeadlineWithUnderline("Services", 100, 50, "#212121", "36px")}
      <div className="containerCorporateServices">
        <div className="widthContainerServices">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <img src={require("../../images/currentdonation.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Curated Donations</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    Make company donations <br />
                    to any nonprofit in our <br />
                    <strong>carefully selected</strong>
                    <br />
                    portfolio
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/unabridgeddonations.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Unabridged Donations</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>100% </strong>
                    of donations go <br />
                    <strong>straight to the cause(s)</strong>
                    <br />
                    you select
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/inclusivegiving.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Inclusive Giving</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Engage employees</strong> <br />
                    on choosing which <br />
                    causes to support
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <img src={require("../../images/scheduledgiving.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Scheduled Giving</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    Set up a giving <br />
                    strategy that <strong>suits</strong>
                    <br />
                    <strong>your organization's</strong>
                    <br />
                    planning
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/usefulinsights.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Useful Insights</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Track and get insights</strong>
                    <br />
                    on your company's
                    <br />
                    philanthropic <strong>activity</strong>
                    <br />
                    <strong>and impact</strong>
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/searchfilter.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Fast Search & Filter</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Easily search and</strong>
                    <br />
                    <strong>find</strong> causes and non
                    <br />
                    profits that <strong>work on</strong>
                    <br />
                    <strong>what you care about</strong>
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/regularreports.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Regular Reports</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    Get <strong>engaging reports</strong>
                    <br />
                    that tell a story of <strong>your</strong>
                    <br />
                    <strong>company's giving</strong>
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/insidestories.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Inside Stories</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    Gain access to <strong>inside</strong>
                    <br />
                    <strong>stories</strong> from your
                    <br />
                    chosen nonprofits
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/bookconsultations.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#490374",
                      marginTop: 10,
                    }}
                  >
                    <strong>Book Consultations</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    Talk with experts in <br />
                    the field and get a <br />
                    package <strong>tailored to</strong>
                    <br />
                    <strong>your needs</strong>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}
