import React from "react";
import "./CaseStudyWater.css";
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";
import {Box, Grid} from "@material-ui/core";
import CustomButton from "../../components/CustomButton/CustomButton";

export function CaseStudyWaterHeader() {
  return (
    <>
        <Grid container>
      <Grid item className="headers">
          <Box>
        {HeaderBox(
          "https://images.unsplash.com/photo-1596021876043-3ec2658c4477?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
          "Water",
          "black",
          <p>
            <strong>
              <em>785 million</em>
            </strong>{" "}
            people in the world live{" "}
            <strong>
              <em>without</em>
            </strong>
            <br /> clean water. <br />
          </p>,
          "black"
        )}
          </Box>
      </Grid>
            <Box
                sx={{
                    position: "relative",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: "12px",
                }}
            >
                <CustomButton
                    p="12px 22px"
                    to="/booking"
                    variant="contained"
                    className="consultationButton"
                >
                    Book a Consultation
                </CustomButton>
            </Box>
        </Grid>
    </>
  );
}
