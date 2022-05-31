import React from "react";
import "./Home.css";
import {Box, Grid, Typography} from "@mui/material";
import { members } from "../../components/MemberServiceCard/Members";
import { MemberServiceCard } from "../../components/MemberServiceCard/memberServiceCard";
import { sectors } from "../../components/SectorCard/sectors";
import { SectorCard } from "../../components/SectorCard/sectorCard";
import { BeTheChange } from "../../components/BeTheChange/beTheChange";
import { PartnerCard } from "../../components/PartnerCard/partnerCard";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";
import CustomButton from "../../components/CustomButton/CustomButton";

export function Home() {
  return (
    <>
    {/*HEADER*/}
      <Box className="home-header" paddingBottom={{xs: 5, md: 10,}} paddingTop={{xs: 5, md: 15,}}>
        <img className="header-image" src="https://images.unsplash.com/photo-1636320804382-912276801e97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
        <Grid container direction="row-reverse" alignItems="end" >
          <Grid item container justifyContent="end" xs={12} sm={6}>
            <Box sx={{textAlign: {xs: 'center', sm: 'left'}}} className="text-container-header" paddingRight={{xs: 0, sm: 2}} >
              <Typography gutterBottom variant="h2" color="white">Make an <span className="text-highlight">impact</span> with <span className="text-highlight">Meliora</span></Typography>
              <Typography color="textPrimary" paragraph fontWeight={500} fontSize={16} >
                A digital platform where companies can give to nonprofits in a more <span className="text-highlight">impactful and sustainable way</span>
              </Typography>
              <CustomButton p="12px 22px" to={"/booking"}  variant="contained">
                  Book a Consultation
                </CustomButton>
            </Box>
          </Grid>
        </Grid>
      </Box>



       <Box py={{xs: 5, md: 10,}}>
        <Grid container justifyContent="center">
          <Grid item>
            <div className="text-box">
              {HeadlineWithUnderline(
                "Member services",
                80,
                "#034F7A",
                0,
                "#034F7A"
              )}
            </div>
          </Grid>
        </Grid>
        <Box py={5} px={{xs: 2}}>
           <Grid container justifyContent="center" spacing={5}>
            {members.map((member) => (
                <Grid item xs={12} sm={6} md={5}>
                    <>
                      <MemberServiceCard
                        key={member.title}
                        title={member.title}
                        content={member.content}
                        icon={member.icon}
                        linkTo={member.linkTo}
                      />
                    </>
                </Grid>
            ))}
            </Grid>

               </Box>

      </Box>


      {/*SECTOR SECTION*/}
      <Box paddingTop={{xs: 5, md: 10,}} >
        <Grid
          container
          flexDirection="column"
          alignContent="center"
          textAlign="center"
        >
          <Grid item>
            <div className="text-box">
              {HeadlineWithUnderline("Sectors", 80, "#034F7A", 15, "#034F7A")}
            </div>
          </Grid>
          <Grid item>
            <div className="sector-text" style={{ textAlign: "center" }}>
              <p>
                Collaborating with the right partners and donors is important to
                us, and research shows that too many choices can lead to a
                paradox of choice. That is why we have chosen to focus on
                Knowledge and Water. These two categories encompass several of
                the U.N SDGs most notably goals.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>


      <Box paddingBottom={{xs: 5, md: 15}} px={{xs: 2}} paddingTop={5}>
      <Grid container justifyContent="center" spacing={5}>
      {sectors.map((sector) => (
                <Grid item xs={12} sm={6} md={5}>
                  <SectorCard
                    key={sector.title}
                    title={sector.title}
                    content={sector.content}
                    image={sector.image}
                    linkTo={sector.linkTo}
                  />
                </Grid>
              ))}
      </Grid>
      </Box>
      {/* <Grid container justifyContent="center">
        {sectors.map((sector) => (
          <>
            <SectorCard
              key={sector.title}
              title={sector.title}
              content={sector.content}
              image={sector.image}
              linkTo={sector.linkTo}
            />
          </>
        ))}
      </Grid> */}

      {/*BE THE CHANGE SECTION*/}
      <Box py={{xs: 5, md: 10,}}>
        <BeTheChange />
        <div style={{ marginTop: 40 }} />
      </Box>
      <Box>
        {HeadlineWithUnderline("Partners", 80, "#034F7A", 40, "#034F7A")}
{/*         <PartnerCard /> */}
        <div style={{ marginBottom: 40 }} />
      </Box>
    </>
  );
}
