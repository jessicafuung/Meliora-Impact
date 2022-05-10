import { useState } from "react";
import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Reach out if you want to collaborate or know more about our services or
        just to connect
      </p>
        <ContactForm/>
    </div>
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
        <TextField required label={"Name"} variant={"standard"} />
          {/*
        <input
          id={"name"}
          name={name}
          onChange={(event) => setName(event.target.value)}
        />*/}
      </div>
      <div>
        <TextField required label={"Co. Name"} variant={"standard"} />
          {/*
        <input
          name={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />*/}
      </div>
      <div>
        <TextField required label={"Email"} variant={"standard"}/>

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
