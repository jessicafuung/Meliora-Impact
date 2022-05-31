import { useState } from "react";
import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import "./contact.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline";

export function Contact() {
  return (
    <Box mt={10} mb={20}>
      <Grid container justifyContent="center" alignItems="center">
        <header className="contactHeader">
          <Grid item xs={12}>
            {HeadlineWithUnderline("Contact", 120, "#034F7A", 20)}
            <p style={{ maxWidth: 300, textAlign: "center", marginBottom: 30 }}>
              Reach out if you want to <span className={"textHighlight"}>collaborate</span> or know more about our
              services, or just to <span className={"textHighlight"}>connect</span>.
            </p>
          </Grid>
        </header>
        <Grid container gap={20} alignItems="center" justifyContent="center">
          <Grid item>
            <ContactForm color={"primary"} />
          </Grid>

          <Grid item>
            <div className="contactInfo">
              <PhoneIcon sx={{ fontSize: 50 }} color={"primary"} />
              <p>+47 92 45 26 10</p>
            </div>
            <div className="contactInfo">
              <EmailIcon sx={{ fontSize: 50 }} color={"primary"} />
              <p>contact@melioraimpact.no</p>
            </div>
            <div className="contactInfo">
              <LocationOnIcon sx={{ fontSize: 50 }} color={"primary"} />
              <p>Peder Ankers plass 49</p>
              <p>0301 Oslo</p>
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
  /*const toast = useToast();*/

  return (
    <form>
      <div className="formInfo">
        <TextField
          required
          color={"primary"}
          label={"Contact person"}
          sx={{ width: 330 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon sx={{fontSize: 40}} color={"primary"} />
              </InputAdornment>
            ),
          }}
          variant={"standard"}
        />
      </div>
      <div className="formInfo">
        <TextField
          required
          label={"Co. Name"}
          sx={{ width: 330 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BusinessIcon sx={{fontSize: 40}} color={"primary"} />
              </InputAdornment>
            ),
          }}
          variant={"standard"}
        />
      </div>
      <div className="formInfo">
        <TextField
          required
          label={"Email"}
          sx={{ width: 330 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon sx={{fontSize: 40}} color={"primary"} />
              </InputAdornment>
            ),
          }}
          variant={"standard"}
        />
      </div>
      <div className="formInfo">
        <TextField
          required
          label="Message"
          sx={{ width: 330 }}
          multiline
          rows={4}
        />
      </div>
      <div align="center">
        <CustomButton
          variant="contained"
          to={"/contact"}
          /*
          Toast with chakra
          onClick={() =>
            toast({
              title: "Message sent.",
              description: "Thank you for reaching out to us.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }*/
        >
          Submit
        </CustomButton>
      </div>
    </form>
  );
}
