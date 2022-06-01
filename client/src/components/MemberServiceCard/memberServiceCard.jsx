import { Business, Soap } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  SvgIcon,
  Typography,
} from "@mui/material";
import "./memberService.css";
import { HandHoldingHeartIcon } from "../assets/handHoldingHeartIcon";
import "./Members";
import CustomButton from "../CustomButton/CustomButton";

export function MemberServiceCard({ title, content, icon, linkTo }) {
  return (
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
            color="textPrimary"
            variant="h3"
            className="service-header"
          >
            {title}
          </Typography>
          <Typography
            align="left"
            paragraph
            fontSize={16}
            className="service-content"
          >
            {content}{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} className="service-button" alignItems="flex-end">
          <Box pt={10}>
            <CustomButton p="12px 22px" to={linkTo} variant="outlined">
              Learn more
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
