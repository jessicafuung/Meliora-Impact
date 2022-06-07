import React from "react";
import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#F2F2F2",
    },
  },
}));

export function Progressbar({ activeStep }) {
  const classes = useStyles();

  return (
    <div style={{ margin: 20 }} className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step>
          <StepLabel>Step 1: Select a date</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2: Choose time</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3: Fill the form</StepLabel>
        </Step>
        <Step>
          <StepLabel>All steps completed!</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
