import { Box, Grid, TextField } from "@mui/material";
import "./FaqPageStyle.css";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import FaqQuestionCard from "../../components/FaqQuestionCard/FaqQuestionCard";
import CustomHeadline from "../../components/CustomHeadline/CustomHeadlineComponent";
import CustomButton from "../../components/CustomButton/CustomButton";

export function FaqPage() {
  return (
    <Box mt={20} px={{ xs: 2, md: 12, lg: 18, xl: 28 }}>
      <Grid textAlign="center" container justifyContent="center">
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Box>
            <CustomHeadline fontWeight={700} size="h4">
              FAQs
            </CustomHeadline>
            <Typography mt={3} paragraph>
              How can we help you?
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent="center" xs={12} md={6}>
          <Box>
            <input
              type="text"
              name="search"
              className="searchBar"
              placeholder="search"
            />
            <SearchIcon color="primary" fontSize="large" />
          </Box>
        </Grid>
      </Grid>

      <Box my={4}>
        <Grid container gap={{ xs: 4, sm: 0 }} justifyContent="center">
          {/* LATER WE MAP THOUGH THE ARRAY FROM THE DB AND PRINT OUT GRID ITEM IN EACH LOOP
                        array.map(obj => {
                            <Grid item xs={12} sm={6}>
                                <FaqQuestionCard
                                 question={obj.question} 
                                 answer={obj.answer}
                                 />
                            </Grid>
                        })
                    */}
          <Grid item xs={12} sm={6}>
            <FaqQuestionCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FaqQuestionCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FaqQuestionCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FaqQuestionCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FaqQuestionCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FaqQuestionCard />
          </Grid>
        </Grid>
      </Box>

      <Grid container justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <article>
            <p>If you can't find your question, please complete the form</p>
            <CustomButton variant="text">Contact</CustomButton>
          </article>
        </Grid>
      </Grid>
    </Box>
  );
}
