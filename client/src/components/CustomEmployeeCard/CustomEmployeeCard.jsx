import { Avatar, Grid, Typography, Link, Button } from "@mui/material";
import React from "react";
import "./CustomEmployeeStyle.css";
import Box from "@mui/material/Box";
import CustomButton from "../CustomButton/CustomButton";

export function CustomEmployeeCard({
  employee: { name, image, position, about, linkedin },
}) {
  return (
    <Box
      sx={{ borderRadius: 2, maxWidth: 350 }}
      className="employeeCard"
      style={{ backgroundColor: "#DFE5E9" }}
    >
      <Box>
        <Grid
          container
          mt={2}
          gap={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container justifyContent="center" xs={2}>
            <Avatar sx={{ width: 56, height: 56 }} src={`${image}`} />
          </Grid>
          <Grid item container justifyContent="start" xs={8}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography mb={0} variant="h6" color="primary">
                {name}
              </Typography>
              <Typography mb={0} paragraph color="textDisabled">
                {position}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} pr={2} pl={2}>
          <Typography color="textPrimary" paragraph>
            {about}
          </Typography>
        </Box>

        <div className={"buttonDiv"}>
          <Button
            variant="outlined"
            target="_blank"
            href={linkedin}
            color="primary"
            style={{
              padding: "0 22px",
              textDecoration: "none",
              fontWeight: 500,
              borderRadius: 0,
              textTransform: "none",
            }}
            sx={{
              ":hover": {
                backgroundColor: "#034F7A",
                color: "white",
              },
            }}
          >
            Linked In
          </Button>
        </div>
      </Box>
    </Box>
  );
}
