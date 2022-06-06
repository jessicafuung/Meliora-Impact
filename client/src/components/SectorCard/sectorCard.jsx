import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import "./sectors";
import "./sectorCard.css";
import { Link } from "react-router-dom";

export function SectorCard({ title, content, image, linkTo }) {
  return (
    <Link to={linkTo}>
    <Box textAlign="center" className="sector-container" p={{ xs: 6, lg: 10 }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item>
          <img src={image} className="sector-image" />
        </Grid>
        <Grid item>
          <Box mt={2}>
            <Typography
              gutterBottom
              color="textPrimary"
              variant="h3"
              className="sector-header"
            >
              {title}
            </Typography>
            <Typography
              fontSize={15}
              align="center"
              color="textPrimary"
              className="sector-content"
            >
              {content}
            </Typography>
            <Box
              alignItems="center"
              sx={{
                position: "absolute",
                bottom: "2rem",
                left: "50%",
                transform: "translateX(-50%)",
                paddingBottom: "15px",
              }}
              textAlign="center"
              className="sector-button"
            >
              <CustomButton p="12px 22px" to={linkTo} variant="outlined">
                Case study
              </CustomButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Link>
  );
}
