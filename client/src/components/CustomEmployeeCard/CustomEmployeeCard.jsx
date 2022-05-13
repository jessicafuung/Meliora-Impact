import {Avatar, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from "react";
import './CustomEmployeeStyle.css';
import CustomButton from "../CustomButton/CustomButton";

export function CustomEmployeeCard({employee: {name, image, position, about, linkedin}}) {

    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography paragraph color="primary">
                    {name}
                </Typography>
                <Typography paragraph color="textDisabled">
                    {position}
                </Typography>
                <Avatar>H</Avatar>
                <Typography paragraph>
                    {about}
                </Typography>
            </CardContent>
            <CardActions>
                <CustomButton variant="contained" to={linkedin}>kdssk</CustomButton>
            </CardActions>
        </Card>
    )
}