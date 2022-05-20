import { useState } from "react";
import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import "./styling/contact.css";
import Typography from "@mui/material/Typography";
import CustomButton from "./components/CustomButton/CustomButton";

export function Contact() {
  return (
    <Box mt={10}>
      <Grid container justifyContent="center" alignItems="center">
        <header className="contactHeader">
          <Grid item xs={12}>
            <Typography textAlign="center" variant="h2">
              Contact
            </Typography>
            <Typography paragraph>
              Reach out if you want to collaborate or know more about our
              services, or just to connect
            </Typography>
          </Grid>
        </header>
        <Grid container gap={12} alignItems="center" justifyContent="center">
          <Grid item>
            <ContactForm color={"primary"} />
          </Grid>

          <Grid item>
            <div className="contactInfo">
              <PhoneIcon color={"primary"} />
              <Typography paragraph>+47 92 45 26 10</Typography>
            </div>
            <div className="contactInfo">
              <EmailIcon color={"primary"} />
              <Typography paragraph>contact@melioraimpact.no</Typography>
            </div>
            <div className="contactInfo">
              <LocationOnIcon color={"primary"} />
              <Typography paragraph>Peder Ankers plass 49 0301 Oslo</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function ContactForm() {
  //om man skal få den til å lagre informasjonen man skriver inn
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div className="formInfo">
        <TextField
          required
          color={"primary"}
          label={"Name"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon color={"primary"} />
              </InputAdornment>
            ),
          }}
          variant={"standard"}
        />
        {/*
        <input
          id={"name"}
          name={name}
          onChange={(event) => setName(event.target.value)}
        />*/}
      </div>
      <div className="formInfo">
        <TextField
          required
          label={"Co. Name"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BusinessIcon color={"primary"} />
              </InputAdornment>
            ),
          }}
          variant={"standard"}
        />
        {/*
        <input
          name={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />*/}
      </div>
      <div className="formInfo">
        <TextField
          required
          label={"Email"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon color={"primary"} />
              </InputAdornment>
            ),
          }}
          variant={"standard"}
        />

        {/*
          <input
            name={email}
            onChange={(event) => setEmail(event.target.value)}
          />*/}
      </div>
      <div className="formInfo">
        <TextField required label="Message" multiline rows={4} />
        {/*
        <textarea
          name={message}
          onChange={(event) => setMessage(event.target.value)}
        />*/}
      </div>
      <div align="center">
        <CustomButton variant="contained">Submit</CustomButton>
      </div>
    </form>
  );
}
