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
                        <Grid item xs={12}>
                        <div className="service-icon">{icon}</div>
                        <Typography className="service-header">{title}</Typography>
                        <Typography className="service-content">{content} </Typography>
                        </Grid>
                            <Grid item container xs={12} alignItems="center" justifyContent="end" xs={12} flexDirection="column" className="service-button">
                            <CustomButton to={"/"} variant="contained">Learn more</CustomButton>
                        </Grid>
                    </Card>
                </Grid>
            </Box>
        )
}