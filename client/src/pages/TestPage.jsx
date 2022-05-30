import React from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import CustomHeadline from "../components/CustomHeadline/CustomHeadlineComponent";
import { Grid } from "@mui/material";
import { sectors } from "../components/SectorCard/sectors";
import { SectorCard } from "../components/SectorCard/sectorCard";

const TestPage = () => {
  return (
    /* <>
             <div style={{
                 height: "120vh",
                 backgroundImage: "url(https://images.unsplash.com/photo-1636320804382-912276801e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)"
             }}/>
             <CustomButton variant="contained" to="/" p="10px">Book a consultation</CustomButton>
         </>*/
    <>
      <Grid container>
        {sectors.map((hm) => (
          <>
            <SectorCard
              key={hm.title}
              title={hm.title}
              content={hm.content}
              image={hm.image}
            />
          </>
        ))}
      </Grid>
    </>
  );
};

export default TestPage;
