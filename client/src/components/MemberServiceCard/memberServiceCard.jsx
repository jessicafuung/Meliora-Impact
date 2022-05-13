import {Business, Soap} from "@mui/icons-material";
import {Box, Button, Card, CardActions, Grid, SvgIcon, Typography} from "@mui/material";
import "./memberService.css";
import {HandHoldingHeartIcon} from "../assets/handHoldingHeartIcon";
import "./Members"
import CustomButton from "../CustomButton/CustomButton";

export function MemberServiceCard({title, content, icon}) {

        return (
            <Box textAlign="center" className="service-container">
                <Grid container flexDirection="row">
                    <Card className="service-card">
                        {/*<div{props.icon} className="service-icon"/>*/}
                        <Typography className="service-header">{title}</Typography>
                        <Typography className="service-content">{content} </Typography>
                        <Box alignItems="center" textAlign="center" className="service-button">
                            <CustomButton to={"/"} variant="contained">Learn more</CustomButton>
                        </Box>
                    </Card>
                </Grid>
            </Box>
        )
}