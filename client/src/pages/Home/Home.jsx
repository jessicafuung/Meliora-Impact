import React from "react";
import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomButton from "../../components/CustomButton/CustomButton";

export function Home() {
  return (
    <>
      <Box className="header" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img
                className="titleImage"
                src="https://i.postimg.cc/Kjwnys4K/Meliora-title.png"
              />
              <p className="description" style={{ fontSize: 26 }}>
                A digital platform where{" "}
                <strong>
                  <em>companies</em>
                </strong>
                <br />
                can give to nonprofits in a more
                <br />{" "}
                <strong>
                  <em>impactful</em>
                </strong>
                and{" "}
                <strong>
                  <em>sustainable</em>
                </strong>{" "}
                way
              </p>
              <button className="consultationBtn">
                <strong>Book a Consultation</strong>
              </button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
