import { Box, Grid, Typography } from "@mui/material";
import "./memberService.css";
import "./Members";
import CustomButton from "../CustomButton/CustomButton";
import {Link} from "react-router-dom";

export function MemberServiceCard({ title, content, icon, linkTo }) {
  return (
    <Link to={linkTo}>
    <Box className="service-card" py={5} px={8}>
      <Grid
        container

        direction="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Box className="service-icon">
            <Typography align="center" color="primary" fontSize={50}>
              {icon}
            </Typography>
          </Box>
          <Typography
            align="center"
            gutterBottom
            marginBottom={2}
            color="textPrimary"
            variant="h4"
            fontWeight={400}
            className="service-header"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            paragraph
            fontSize={16}
            className="service-content"
          >
            {content}{" "}
          </Typography>
        </Grid>
        <Box className="member-service-card__button">
          <CustomButton p="12px 22px" to={linkTo} variant="outlined">
            Learn more
          </CustomButton>
        </Box>
      </Grid>
    </Box>
    </Link>
  );
}
