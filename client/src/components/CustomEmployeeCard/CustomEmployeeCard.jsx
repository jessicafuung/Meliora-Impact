import {Avatar, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import React from "react";
import './CustomEmployeeStyle.css';
import CustomButton from "../CustomButton/CustomButton";
import {Box} from "@mui/system";

export function CustomEmployeeCard({employee: {name, image, position, about, linkedin}}) {

    return (
        <Card sx={{maxWidth: 350}} className="employeeCard" style={{backgroundColor: "#DFE5E9"}}>
            <CardContent>
                <Grid container mt={2} gap={4} justifyContent='center' alignItems="center">
                    <Grid item container justifyContent='center' xs={2}>
                        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                    </Grid>
                    <Grid item container justifyContent='start' xs={8}>
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
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <CustomButton variant="contained" to={linkedin}>LinkedIn</CustomButton>
            </CardActions>
        </Card>
    )
}