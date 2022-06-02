import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    "&.MuiPaper-root":{
      backgroundColor:"transparent"
    }
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
