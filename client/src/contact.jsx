import { useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import {InputAdornment, TextField} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import "./styling/contact.css";


export function Contact() {
  return (
      <>
      <header className="contactHeader">
          <h1>Contact</h1>
          <p>
              Reach out if you want to collaborate or know more about our services, or
              just to connect
          </p>
      </header>
        <Grid container spacing={10}>
            <Grid item>
                <ContactForm color={"primary"}/>
            </Grid>

            <Grid item>
                <div>
                    <PhoneIcon color={"primary"}/>
                    <p>
                        +47 92 45 26 10
                    </p>
                </div>
                <div>
                    <EmailIcon color={"primary"}/>
                    <p>contact@melioraimpact.no
                    </p>
                </div>
                <div>
                    <LocationOnIcon color={"primary"}/>
                    <p>Peder Ankers plass 49 0301 Oslo</p>
                </div>
            </Grid>
        </Grid>
      </>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <div>
        <TextField required color={"primary"} label={"Name"} InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <PersonIcon color={"primary"}/>
                </InputAdornment>
            ),
        }} variant={"standard"} />
          {/*
        <input
          id={"name"}
          name={name}
          onChange={(event) => setName(event.target.value)}
        />*/}
      </div>
      <div>
        <TextField required label={"Co. Name"} InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <BusinessIcon color={"primary"}/>
                </InputAdornment>
            ),
        }} variant={"standard"} />
          {/*
        <input
          name={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />*/}
      </div>
      <div>
        <TextField required label={"Email"} InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <EmailIcon color={"primary"}/>
                </InputAdornment>
            ),
        }} variant={"standard"}/>

          {/*
          <input
            name={email}
            onChange={(event) => setEmail(event.target.value)}
          />*/}
      </div>
      <div>
        <TextField required label="Message" multiline rows={4} />
          {/*
        <textarea
          name={message}
          onChange={(event) => setMessage(event.target.value)}
        />*/}
      </div>
      <div>
        <Button variant={"contained"}>Submit</Button>
      </div>
    </form>
  );
}
