import {Business, Soap} from "@mui/icons-material";
import {Box, Button, Card, CardActions, Grid, SvgIcon, Typography} from "@mui/material";
import "./memberService.css";
import {HandHoldingHeartIcon} from "../../assets/handHoldingHeartIcon";
import "./Members"

export function MemberServiceCard({title, content, icon}) {

    // export const members = [
    //     {
    //         title: "Business",
    //         content: "For businesses who are profitable \n" +
    //                  "and want to use their resources \n" +
    //                  "for greater social good",
    //         icon: <Business />,
    //     },
    //     {
    //         title: "Non-profits",
    //         content: "For nonprofits who are seeking \n" +
    //                  "to carry out their frontline work",
    //         icon: <HandHoldingHeartIcon />,
    //     }
    // ]

        return (
            <Box textAlign="center" className="service-container">
                <Grid container flexDirection="row">
                    <Card  className="service-card">
                        {/*<div{props.icon} className="service-icon"/>*/}
                        <Typography className="service-header">{title}</Typography>
                        <Typography className="service-content">{content} </Typography>
                        <Box textAlign="center" className="service-button">
                            <Button variant="contained">Learn more</Button>
                        </Box>
                    </Card>
                </Grid>
            </Box>
        )
}