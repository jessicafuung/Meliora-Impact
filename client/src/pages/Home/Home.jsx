import React from "react";
import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Footer } from "../../components/Footer/footer";
import { members } from "../../components/MemberServiceCard/Members";
import { MemberServiceCard } from "../../components/MemberServiceCard/memberServiceCard";
import { Typography } from "@mui/material";
import { sectors } from "../../components/SectorCard/sectors";
import { SectorCard } from "../../components/SectorCard/sectorCard";
import { BeTheChange } from "../../components/BeTheChange/beTheChange";
import { PartnerCard } from "../../components/PartnerCard/partnerCard";
import CustomHeadline from "../../components/CustomHeadline/CustomHeadlineComponent";
import Navbar from "../../components/Navbar/Navbar";
import { Underline } from "../../components/Underline/underline";

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
              <h1
                style={{
                  fontSize: 36,
                  color: "#034F7A",
                  textAlign: "center",
                }}
              >
                Member services
              </h1>
              {Underline(200, "#034F7A")}
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
              <h1
                style={{
                  fontSize: 36,
                  color: "#034F7A",
                  textAlign: "center",
                }}
              >
                Sectors
              </h1>
              {Underline(80, "#034F7A")}
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
            />
          </>
        ))}
      </Grid>
      <Box>
        <BeTheChange />
      </Box>
      <Box>
        <h1
          style={{
            fontSize: 36,
            color: "#034F7A",
            textAlign: "center",
          }}
        >
          Partners
        </h1>
        {Underline(80, "#034F7A")}
        <PartnerCard />
      </Box>
      <Footer />
    </>
  );
}
