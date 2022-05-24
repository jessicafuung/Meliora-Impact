import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import "./CustomEmployeeStyle.css";
import { Box } from "@mui/system";

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
            <Typography mb={0} variant="h6" color="primary">
              {name}
            </Typography>
            <Typography mb={0} paragraph color="textDisabled">
              {position}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3} pr={2} pl={2}>
          <Typography color="textPrimary" paragraph>
            {about}
          </Typography>
        </Box>
        <div className={"buttonDiv"}>
            <a className={"fakeButton"} href={linkedin} target={"_blank"}>
              LinkedIn</a>
        </div>
      </Box>
    </Box>
  );
}
