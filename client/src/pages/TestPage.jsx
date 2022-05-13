import React from 'react'
import CustomButton from '../components/CustomButton/CustomButton';
import CustomHeadline from '../components/CustomHeadline/CustomHeadlineComponent';
import {Business} from "@mui/icons-material";
import {HandHoldingHeartIcon} from "../components/assets/handHoldingHeartIcon";
import {MemberServiceCard} from "../components/MemberServiceCard/memberServiceCard";
import {Box, Grid} from "@mui/material";
import {Footer} from "../components/Footer/footer";
import {members} from "../components/MemberServiceCard/Members";
import Navbar from "../components/Navbar/Navbar";

const TestPage = () => {

    return (
        <>
            <Grid container>
            {members.map(ass => (
                <>
                    <MemberServiceCard key={ass.title} title={ass.title} content={ass.content} />
                </>
                )
            )}
                <Footer/>
            </Grid>

        </>
    )
}

export default TestPage;