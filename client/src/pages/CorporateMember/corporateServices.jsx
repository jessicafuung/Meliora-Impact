import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./corporateServices.css";
import { Underline } from "../../components/Underline/underline";

export function CorporateServices() {
  return (
    <>
      <div>
        <h1
          style={{
            fontSize: 36,
            textAlign: "center",
          }}
        >
          Services
        </h1>
        {Underline(100, "#034F7A")}
      </div>
      <div className="containerCorporateServices">
        <div className="widthContainerServices">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center" }}>
                  <img src={require("../../images/currentdonation.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
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
                    <strong>Regular</strong> funding
                    <br /> stream
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/unabridgeddonations.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Platform</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    One platform <strong>connecting</strong>
                    <br />
                    them to their
                    <br />
                    <strong>donors</strong>
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/inclusivegiving.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Tools</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Free</strong> digital
                    <br /> tools
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", marginTop: 10 }}>
                  <img src={require("../../images/scheduledgiving.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Funding</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Regular</strong> funding
                    <br /> stream
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/usefulinsights.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Platform</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    One platform <strong>connecting</strong>
                    <br />
                    them to their
                    <br />
                    <strong>donors</strong>
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/searchfilter.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Tools</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Free</strong> digital
                    <br /> tools
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/regularreports.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Tools</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Free</strong> digital
                    <br /> tools
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/insidestories.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Tools</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Free</strong> digital
                    <br /> tools
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{ textAlign: "center", margin: 20 }}>
                  <img src={require("../../images/bookconsultations.svg")} />
                  <p
                    style={{
                      fontSize: 18,
                      color: "#034F7A",
                      marginTop: 10,
                    }}
                  >
                    <strong>Tools</strong>
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      marginTop: 8,
                    }}
                  >
                    <strong>Free</strong> digital
                    <br /> tools
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
