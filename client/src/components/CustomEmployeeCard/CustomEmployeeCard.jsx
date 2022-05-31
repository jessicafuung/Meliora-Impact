import { Avatar, Grid, Typography, Button } from "@mui/material";
import React from "react";
import "./CustomEmployeeStyle.css";
import Box from "@mui/material/Box";

export function CustomEmployeeCard({
  employee: { name, image, position, about, linkedin },
}) {
  return (
    <Box
      sx={{ borderRadius: 2, maxWidth: 350, height: 350, position: "relative"}}
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
          <Grid item container justifyContent="start" flexDirection={"column"} xs={8}>
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
          LinkedIn
        </Button>
      </div>
    </Box>
  );
}
