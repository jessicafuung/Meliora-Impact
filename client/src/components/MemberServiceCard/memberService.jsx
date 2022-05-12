import {Business, Soap} from "@mui/icons-material";
import {Box, Button, Card, CardActions, Grid, SvgIcon, Typography} from "@mui/material";
import "./memberService.css";
import {HandHoldingHeartIcon} from "../../assets/handHoldingHeartIcon";
import CustomButton from "../CustomButton/CustomButton";


export function MemberService() {
    return (
        <Box textAlign="center" className="service-container">
            <Grid container flexDirection="row">
            <Card className="service-card">
                <Business fontSize="large" className="service-icon"/>
                <h4 className="service-header">
                    Business
                </h4>
                <Typography className="service-content">
                    For businesses who are profitable <br/>
                    and want to use their resources <br/>
                    for greater social good
                </Typography>
                <Box textAlign="center" className="service-button">
                    <CustomButton to="/" variant="contained">Learn more</CustomButton>
                </Box>
            </Card>
            <Card className="service-card">
                <HandHoldingHeartIcon fontSize="large" className="service-icon" />
                <h4 className="service-header">
                    Non-profits
                </h4>
                <Typography className="service-content">
                    For nonprofits who are seeking <br/>
                    to carry out their frontline work <br/>
                    <br/>
                </Typography>
                    <Box textAlign="center" className="service-button">
                        <CustomButton to="/" variant="contained">Learn more</CustomButton>
                    </Box>
            </Card>
            </Grid>
        </Box>
    )
}