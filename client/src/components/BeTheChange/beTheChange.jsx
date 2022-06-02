import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./beTheChange.css";
import { HeadlineWithUnderline } from "../HeadlineWithUnderline/headlineWithUnderline";
import { Container } from "@mui/material";

export function BeTheChange() {
  return (
    <>
      {HeadlineWithUnderline(
        "Be the Change",
        200,
        "#034f7a",
        0,
        "#212121",
        "36px"
      )}
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          A few highlights from what our members has helped us accomplish
          <br /> so far.
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} style={{ maxWidth: 1440, margin: "auto" }}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <div className="image1" />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <div className="section1">
              <img
                className="KristianiaImg"
                src={require("../../images/KristianiaUniversityCollege_sort_rgb 1.svg")}
              />
              <Container>
                <p className="text1">
                  The donations{" "}
                  <strong>
                    <em>Kristiania University College</em>
                  </strong>{" "}
                  has made has contributed with us being able to build{" "}
                  <strong>
                    <em>50</em>
                  </strong>{" "}
                  more schools.
                </p>
              </Container>
            </div>
          </Grid>
        </Grid>
      </Box>
      <div style={{ height: 30 }} />
      <Box>
        <Grid container spacing={0} style={{ maxWidth: 1440, margin: "auto" }}>
          <Grid item xs={12} md={6}>
            <div className="section2">
              <img
                className="PhotoFindrImg"
                src={require("../../images/PhotoFindr.svg")}
              />
              <Container>
                <p className="text2">
                  <strong>
                    <em>PhotoFindr</em>
                  </strong>{" "}
                  has helped us build wells and give clean water to{" "}
                  <strong>
                    <em>10</em>
                  </strong>{" "}
                  different villages, that never have had access to it before
                </p>
              </Container>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="image2" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
