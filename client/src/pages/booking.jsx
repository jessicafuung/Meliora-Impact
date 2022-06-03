import React, { useContext, useState } from "react";
import "date-fns";
import moment from "moment";
import { HeadlineWithUnderline } from "../components/HeadlineWithUnderline/headlineWithUnderline";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { InputAdornment, TextField } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import { ThemeProvider } from "@material-ui/styles";

import { ApiContext } from "../../lib/useContext";
import materialTheme from "../styling/calendar";
import "../styling/style.css";
import { Progressbar } from "../components/progressbar";
import Button from "@mui/material/Button";

const availabilities = [
  { time: "08:30" },
  { time: "09:30" },
  { time: "10:30" },
  { time: "11:30" },
  { time: "12:30" },
  { time: "13:30" },
  { time: "14:30" },
  { time: "15:30" },
  { time: "16:30" },
];

/* fetch booked times from DB
function GetBookings() {
    const {listTimes} = useContext(ApiContext);
    const [isBooked, setIsBooked] = useState("true")
    const {loading, error, data} = useLoading(
        async () => await listTimes({isBooked}),
        [isBooked]
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <div id="error-text">{error.toString()}</div>
            </div>
        );
    }

    return <div>
        {data.map((booking) => (
            <p key={booking._id}>{booking.time}</p>
        ))}
    </div>
}
*/

function ShowForm({ userDate, setUserDate, setActiveStep, customStyle }) {
  const { postBooking } = useContext(ApiContext);
  const [isBooked, setIsBooked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    postBooking(userDate);
    setActiveStep(3);
    setIsBooked(true);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDate({ ...userDate, [name]: value });
  };

  return (
    <Container>
      <Grid item container justifyContent={"center"} xs={12}>
        <Box
          sx={{
            backgroundColor: "#DFE5E9",
            padding: "2rem",
            marginY: "2rem",
            position: { xs: "relative", sm: "relative", md: "relative" },
          }}
          style={customStyle}
        >
          <form onSubmit={handleSubmit}>
            <Grid item container justifyContent={"center"} spacing={10}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ width: { md: 500, sx: 0 }, maxWidth: "100%" }}>
                  <Box>
                    <TextField
                      fullWidth
                      required
                      label={"Company Name"}
                      variant={"standard"}
                      name="companyName"
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <BusinessIcon color={"primary"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      required
                      color={"primary"}
                      label={"Contact Person"}
                      variant={"standard"}
                      name="contactPerson"
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon color={"primary"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      required
                      label={"Email"}
                      variant={"standard"}
                      name="email"
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon color={"primary"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      required
                      label={"Telephone"}
                      variant={"standard"}
                      name="telephone"
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PhoneIcon color={"primary"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Message"
                  multiline
                  minRows={15}
                  name="message"
                  variant={"outlined"}
                  onChange={handleChange}
                  sx={{ zIndex: 0 }}
                />
                <Box align="center">
                  <Button variant="contained" to={""} type={"submit"}>
                    {isBooked ? "Booked!" : "Book"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Container>
  );
}

function ShowAvailabilities({
  userDate,
  setUserDate,
  setTimeIsClicked,
  setActiveStep,
  customStyle,
}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = e.target.value;
    setTimeIsClicked(true);
    setUserDate({ ...userDate, time: time });
    setActiveStep(2);
  };

  return (
    <Grid item container justifyContent={"center"} xs={12} sm={6}>
      <Box className="row" p={2} style={customStyle}>
        <Typography
          paragraph
          color={"white"}
          align={"center"}
          id={"availabilities"}
        >
          Availabilities
        </Typography>
        <Grid item container alignContent={"center"}>
          <Grid container justifyContent={"center"}>
            {availabilities.map(({ time }) => (
              <Grid
                item
                xs={4}
                key={time}
                className="column timeBoxes-container"
              >
                <div>
                  <button
                    className="time-btn"
                    value={time}
                    onClick={handleSubmit}
                  >
                    {time}
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

function ShowCalendar({
  setUserDate,
  userDate,
  setDateIsClicked,
  setActiveStep,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const handleDateChange = (date) => {
    const momentFormat = moment(date).format("DD.MM.YYYY");
    setUserDate({ ...userDate, date: momentFormat });
    setDateIsClicked(true);
    setSelectedDate(date);
    setActiveStep(1);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} x>
        <ThemeProvider theme={materialTheme}>
          <Grid
            item
            container
            justifyContent={"center"}
            xs={12}
            sm={6}
            md={6}
            flexdirection={"column"}
          >
            <KeyboardDatePicker
              variant="static"
              id="date-picker"
              label="Date Picker"
              format="dd/MM/yyyy"
              disablePast
              hintText="Weekends Disabled"
              shouldDisableDate={disableWeekends}
              disableToolbar
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{ "aria-label": "change date" }}
            />
          </Grid>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </>
  );
}

export function Start() {
  const [dateIsClicked, setDateIsClicked] = useState(false);
  const [timeIsClicked, setTimeIsClicked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [userData, setUserData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    telephone: "",
    date: "",
    time: "",
    message: "",
  });

  const styleForTime = {
    position: "relative",
    visibility: dateIsClicked ? "visible" : "hidden",
    opacity: dateIsClicked ? "1" : "0",
    right: dateIsClicked ? "0px" : "-50px",
    transition: "200ms all ease-out",
  };

  const styleForForm = {
    position: "relative",
    visibility: timeIsClicked ? "visible" : "hidden",
    opacity: timeIsClicked ? "1" : "0",
    bottom: timeIsClicked ? "0px" : "-50px",
    transition: "200ms all ease-out",
  };

  return (
    <Container maxWidth={"lg"}>
      <Box py={10} textAlign={"center"}>
        {HeadlineWithUnderline(
          "Schedule Meeting",
          200,
          "#034F7A",
          "2rem",
          "#212121",
          "36px"
        )}
        {<Progressbar activeStep={activeStep}/>}
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
          gutterbottom="true"
        >
          <ShowCalendar
            userDate={userData}
            setUserDate={setUserData}
            setDateIsClicked={setDateIsClicked}
            setActiveStep={setActiveStep}
          />

          <ShowAvailabilities
            userDate={userData}
            setUserDate={setUserData}
            setTimeIsClicked={setTimeIsClicked}
            setActiveStep={setActiveStep}
            customStyle={styleForTime}
          />

          <ShowForm
            userDate={userData}
            setUserDate={setUserData}
            setActiveStep={setActiveStep}
            customStyle={styleForForm}
          />
        </Grid>
      </Box>
    </Container>
  );
}
