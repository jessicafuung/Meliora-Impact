import { Box, Card, Grid, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import "./sectors";
import "./sectorCard.css";

export function SectorCard({ title, content, image, linkTo }) {
  return (
    <Box textAlign="center" className="sector-container">
      <Grid container flexDirection="row">
        <Card sx={{ maxWidth: 500 }} className="sector-card">
          <img src={image} width={250} />
          <Typography className="sector-header">{title}</Typography>
          <Typography fontSize={15} className="sector-content">
            {content}{" "}
          </Typography>
          <Box alignItems="center" textAlign="center" className="sector-button">
            <CustomButton to={linkTo} variant="contained">
              Case study
            </CustomButton>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
}
