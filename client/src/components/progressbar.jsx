import React, { useContext, useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

export function Progressbar({ activeStep }) {
  return (
    <div style={{ margin: 20 }}>
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
