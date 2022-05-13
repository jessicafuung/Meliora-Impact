import {Box, Grid, TextField} from "@mui/material";
import './FaqPageStyle.css';
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import FaqQuestionCard from "../../components/FaqQuestionCard/FaqQuestionCard";
import CustomHeadline from "../../components/CustomHeadline/CustomHeadlineComponent";

export function FaqPage() {
    return (
        <Box mt={20} px={{xs: 2, md: 12, lg: 18, xl: 28}}>
            <Grid textAlign='center' container justifyContent="center" >
                <Grid item container justifyContent='center' xs={12} md={6}>
                    <Box>
                        <CustomHeadline fontWeight={700} size="h4">FAQs</CustomHeadline>
                        <Typography mt={3}  paragraph>How can we help you?</Typography>
                    </Box>
                </Grid>
                <Grid item container justifyContent='center' xs={12} md={6}>
                    <Box>
                        <input type="text" name="search" className="searchBar" placeholder="search" />
                        <SearchIcon color="primary" fontSize="large"/>
                        
                    </Box>
                </Grid>
            </Grid>

            <Box my={4}>
                <Grid container justifyContent="center">
                    {/* LATER WE MAP THOUGH THE ARRAY FROM THE DB AND PRINT OUT GRID ITEM IN EACH LOOP
                        array.map(obj => {
                            <Grid item xs={12} md={6}>
                                <FaqQuestionCard
                                 question={obj.question} 
                                 answer={obj.answer}
                                 />
                            </Grid>
                        })
                    */}
                    <Grid item xs={12} md={6}>
                        <FaqQuestionCard />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FaqQuestionCard />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FaqQuestionCard />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FaqQuestionCard />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FaqQuestionCard />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FaqQuestionCard />

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}