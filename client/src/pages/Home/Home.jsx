import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { members } from "../../components/MemberServiceCard/Members";
import { MemberServiceCard } from "../../components/MemberServiceCard/memberServiceCard";
import { sectors } from "../../components/SectorCard/sectors";
import { SectorCard } from "../../components/SectorCard/sectorCard";
import { BeTheChange } from "../../components/BeTheChange/beTheChange";
import { PartnerCard } from "../../components/PartnerCard/partnerCard";
import {HeadlineWithUnderline} from "../../components/HeadlineWithUnderline/headlineWithUnderline";

export function Home() {
  return (
    <>
      <Box className="header" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <img
                className="titleImage"
                src="https://i.postimg.cc/Kjwnys4K/Meliora-title.png"
              />
              <p className="description" style={{ fontSize: 26 }}>
                A digital platform where{" "}
                <strong>
                  <em>companies</em>
                </strong>
                <br />
                can give to nonprofits in a more
                <br />{" "}
                <strong>
                  <em>impactful</em>
                </strong>
                and{" "}
                <strong>
                  <em>sustainable</em>
                </strong>{" "}
                way
              </p>
              <button className="consultationBtn">
                <strong>Book a Consultation</strong>
              </button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container justifyContent="center">
          <Grid item>
            <div className="text-box">
                {HeadlineWithUnderline("Member services", 80 , "#034F7A", 0, "#034F7A")}
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          {members.map((member) => (
            <>
              <MemberServiceCard
                key={member.title}
                title={member.title}
                content={member.content}
                icon={member.icon}
                linkTo={member.linkTo}
              />
            </>
          ))}
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          flexDirection="column"
          alignContent="center"
          textAlign="center"
        >
          <Grid item>
            <div className="text-box">
                {HeadlineWithUnderline("Sectors", 80 , "#034F7A", 15, "#034F7A")}
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
      <Grid container justifyContent="center">
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
      </Grid>
      <Box>
        <BeTheChange />
        <div style={{ marginTop: 40}}/>
      </Box>
      <Box>
          {HeadlineWithUnderline("Partners", 80 , "#034F7A", 40, "#034F7A")}
        <PartnerCard />
        <div style={{ marginBottom: 40}}/>
      </Box>
    </>
  );
}
