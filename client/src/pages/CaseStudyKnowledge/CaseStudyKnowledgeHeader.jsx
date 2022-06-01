import React from "react";
import "./CaseStudyKnowledge.css";
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";
import {Box, Grid} from "@material-ui/core";
import CustomButton from "../../components/CustomButton/CustomButton";

export function CaseStudyKnowledgeHeader() {
  return (
    <>
        <Grid container>
      <Grid item xs={12} className="headers">
          <Box>
        {HeaderBox(
          "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
          "Knowledge",
          "white",
          <p>
            More than{" "}
            <strong>
              <em>72 million</em>
            </strong>{" "}
            children of
            <br />
            primary education age are{" "}
            <strong>
              <em>not</em>
            </strong>{" "}
            in school.
            <br />
          </p>,
          "white"
        )}
          </Box>
      </Grid>
            <Box sx={{
                position: "relative",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "12px"
            }}>
                <CustomButton p="0 22" to="/booking" variant="contained" className="consultationButton">
                    Book a Consultation
                </CustomButton>
            </Box>
        </Grid>
    </>
  );
}
