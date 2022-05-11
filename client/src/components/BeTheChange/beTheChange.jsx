import React from "react"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./beTheChange.css"

export function BeTheChange() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={6}>
                        <div className="image1">bilde1</div>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="text1">
                            PhotoFindr has helped us build wells and give clean water to 10 different villages,
                            that never have had access to it before
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <div style={{height: 30}}></div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={6}>
                        <div className="text2">
                            PhotoFindr has helped us build wells and give clean water to 10 different villages,
                            that never have had access to it before
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="image2">bilde2</div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}