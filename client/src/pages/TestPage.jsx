import React from 'react'
import CustomButton from '../components/CustomButton/CustomButton';
import CustomHeadline from '../components/CustomHeadline/CustomHeadlineComponent';
import {Business} from "@mui/icons-material";
import {HandHoldingHeartIcon} from "../assets/handHoldingHeartIcon";
import {MemberServiceCard} from "../components/MemberServiceCard/memberServiceCard";
import {Box, Grid} from "@mui/material";

const TestPage = () => {
     const members = [
        {
            title: "Business",
            content: "For businesses who are profitable \n" +
                     "and want to use their resources \n" +
                     "for greater social good",
            // icon: <Business />,
        },
        {
            title: "Non-profits",
            content: "For nonprofits who are seeking \n" +
                     "to carry out their frontline work",
            // icon: <HandHoldingHeartIcon />,
        }
    ]


    return (
        <>
            <Grid container>
            {members.map(ass => (
                <>
                    <MemberServiceCard key={ass.title} title={ass.title} content={ass.content} />
                </>
                )
            )}
            </Grid>
        </>
    )
}

export default TestPage;