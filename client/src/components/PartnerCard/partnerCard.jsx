import React from "react"
import "./partnerCard.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function PartnerCard(){
    return (
        <div className="centerDiv">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                    <img src="https://i.postimg.cc/c404Kx3F/google.png"/>
                </Grid>
                <Grid item xs={4} md={4}>
                    <img src="https://i.postimg.cc/j5yt5mSV/Kristiania.png"/>
                </Grid>
                <Grid item xs={4} md={4}>
                    <img src="https://i.postimg.cc/bwYJ5yNZ/linkedin.png"/>
                </Grid>
            </Grid>
        </Box>
        </div>
    );
}