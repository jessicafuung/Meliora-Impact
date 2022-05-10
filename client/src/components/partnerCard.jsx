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
                    <div className="items">Google</div>
                </Grid>
                <Grid item xs={4} md={4}>
                    <div className="items">Høyskolen Kristiania</div>
                </Grid>
                <Grid item xs={4} md={4}>
                    <div className="items">Linkedin</div>
                </Grid>
            </Grid>
        </Box>
        </div>
    );
}