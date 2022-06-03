import React from "react";
import "./Home.css";
import { Box, Grid, Typography } from "@mui/material";
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
      <Box
        className="home-header"
        height={{ xs: "60vh", sm: "80vh", lg: "100vh" }}
      >
        <Grid
          container
          direction="row-reverse"
          height={"100%"}
          justifyContent={{ xs: "center", sm: "end" }}
          alignItems={{ xs: "center" }}
        >
          <Grid item container justifyContent="end" xs={12} sm={6}>
            <Box
              sx={{ textAlign: { xs: "left" } }}
              className="text-container-header"
              padding={{ xs: 2, sm: 2 }}
            >
              <Typography gutterBottom variant="h2" color="white">
                Make an <span className="text-highlight">impact</span> with{" "}
                <span className="text-highlight">Meliora</span>
              </Typography>
              <Typography
                paddingBottom={{ xs: 2, sm: 8 }}
                color="white"
                paragraph
                fontWeight={500}
                fontSize={{ xs: 16, md: 18, lg: 22 }}
              >
                A digital platform where companies can give to nonprofits in a
                more{" "}
                <span className="text-highlight">
                  impactful and sustainable way
                </span>
              </Typography>
              <CustomButton p="12px 22px" to={"/booking"} variant="contained">
                Book a Consultation
              </CustomButton>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box py={{ xs: 5, md: 10 }}>
        <Grid container justifyContent="center">
          <Grid item>
            <div className="text-box">
              {HeadlineWithUnderline(
                "Member services",
                200,
                "#034F7A",
                0,
                "#212121",
                "36px"
              )}
            </div>
          </Grid>
        </Grid>
        <Box py={5} px={{ xs: 2 }}>
          <Grid container justifyContent="center" spacing={6}>
            {members.map((member) => (
              <Grid item lg={4} xs={12} sm={6} md={5} justifyContent="center">
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
      <Box paddingTop={{ xs: 5, md: 10 }}>
        <Grid
          container
          flexDirection="column"
          alignContent="center"
          textAlign="center"
        >
          <Grid item>
            <div className="text-box">
              {HeadlineWithUnderline(
                "Categories",
                80,
                "#034F7A",
                15,
                "#212121",
                "36px"
              )}
            </div>
          </Grid>
          <Grid item xs={8} sm={6} md={5}>
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

      <Box paddingBottom={{ xs: 5, md: 15 }} px={{ xs: 2 }} paddingTop={5}>
        <Grid container justifyContent="center" spacing={6}>
          {sectors.map((sector) => (
            <Grid item lg={4.1} xs={12} sm={6} md={5}>
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

      {/*BE THE CHANGE SECTION*/}
      <Box py={{ xs: 5, md: 10 }}>
        <BeTheChange />
        <div style={{ marginTop: 40 }} />
      </Box>
      <Box>
        {HeadlineWithUnderline(
          "Partners",
          80,
          "#034F7A",
          40,
          "#212121",
          "36px"
        )}
        <PartnerCard />
        <div style={{ marginBottom: 40 }} />
      </Box>
    </>
  );
}
