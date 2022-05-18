import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "./FaqQuestionCardStyle.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";

export function FaqQuestionCard ({ faqs: { _id, question, answer }, }) {
    const [isHidden, setIsHidden] = useState(true);

    const cardStyle = {
        display: !isHidden ? "block" : "none",
        top: !isHidden && "0rem",
        opacity: isHidden ? 0 : 1,
        transition: "all 50ms ease-out",
    };

    const handleClick = () => {
        setIsHidden(!isHidden);
    };

    return (
        <Box onClick={handleClick} className="card-container">
            <Grid container>
                <Grid item xs={11}>
                    <Typography paragraph mb={0} fontWeight={500}>
                        {question}
                    </Typography>
                    <div className="underline" />
                </Grid>
                <Grid mb={3} item xs={1}>
                    <AddCircleOutlineIcon sx={{ color: "#034F7A" }} />
                </Grid>
                <Grid className="hidden-text-container" style={cardStyle} item xs={12}>
                    <Typography paragraph>{answer}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};