import React from "react";
import "./partnerCard.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export function PartnerCard() {
  return (
    <Box className="PartnerCardBox">
      <Grid container spacing={2} style={{ maxWidth: 1440, margin: "auto" }}>
        <Grid item xs={12} md={4}>
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <img src="https://i.postimg.cc/j5yt5mSV/Kristiania.png" />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ textAlign: "center", margin: 20 }}>
            <img src="https://i.postimg.cc/bwYJ5yNZ/linkedin.png" />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ textAlign: "center", margin: 20 }}>
            <img src="https://i.postimg.cc/c404Kx3F/google.png" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
