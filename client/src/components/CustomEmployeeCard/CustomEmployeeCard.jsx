import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './CustomEmployeeStyle.css';

const CustomEmployeeCard = () => {


    return(
        <Box >
            <Grid container p={3} className="cardContainer">
                <Grid item xs={12}>
                    <div>

                    </div>
                    <div>
                    <Typography paragraph color="primary">
                        Test name
                    </Typography>    
                    <Typography paragraph color="textDisabled">
                        Test role
                    </Typography>    

                    </div>

                </Grid>
                <Grid item xs={12}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem repellendus fugit facere neque sed illo corporis facilis, accusamus voluptates quaerat, quod saepe aspernatur maxime vero animi impedit. Est, corporis.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CustomEmployeeCard