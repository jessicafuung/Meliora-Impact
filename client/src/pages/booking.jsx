import React, {useContext, useState} from "react";
import "date-fns"
import moment from 'moment';

import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {InputAdornment, TextField} from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import {ThemeProvider} from "@material-ui/styles";

import {ApiContext} from "../../lib/useContext";
import materialTheme from "../styling/calendar";
import "../styling/style.css"
import Progressbar from "../components/progressbar";

const availabilities = [
    {time: "08:30"},
    {time: "09:30"},
    {time: "10:30"},
    {time: "11:30"},
    {time: "12:30"},
    {time: "13:30"},
    {time: "14:30"},
    {time: "15:30"},
    {time: "16:30"},
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

function ShowForm({userDate, setUserDate}) {
    const { postBooking } = useContext(ApiContext);

    function handleSubmit(e) {
        e.preventDefault();
        postBooking(userDate)
    }

    const handleChange = event => {
        const {name, value} = event.target
        setUserDate({...userDate, [name]: value})
    }

    return (
        <Grid item container justifyContent={"center"} xs={12}>
            <Box sx={{
                backgroundColor: "#DFE5E9",
                padding: "2rem",
                marginTop: "2rem",
                position: {xs: "absolute", sm: "absolute", md: "absolute"},
                left: {xs: "0%", md: "9%", lg: "20%"}
            }}>
                <form onSubmit={handleSubmit}>
                <Grid item container justifyContent={"center"} spacing={10}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{width: 500, maxWidth: '100%'}}>
                            <Box>
                                <TextField fullWidth required label={"Company Name"}
                                           variant={"standard"}
                                           name="companyName"
                                           onChange={handleChange}
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <BusinessIcon color={"primary"}/>
                                                   </InputAdornment>)
                                           }}
                                />
                            </Box>
                            <Box>
                                <TextField fullWidth required color={"primary"}
                                           label={"Contact Person"}
                                           variant={"standard"}
                                           name="contactPerson"
                                           onChange={handleChange}
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <PersonIcon color={"primary"}/>
                                                   </InputAdornment>)
                                           }}
                                />
                            </Box>
                            <Box>
                                <TextField fullWidth required label={"Email"}
                                           variant={"standard"}
                                           name="email"
                                           onChange={handleChange}
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <EmailIcon color={"primary"}/>
                                                   </InputAdornment>)
                                           }}
                                />
                            </Box>
                            <Box>
                                <TextField fullWidth required label={"Telephone"}
                                           variant={"standard"}
                                           name="telephone"
                                           onChange={handleChange}
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <PhoneIcon color={"primary"}/>
                                                   </InputAdornment>)
                                           }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required label="Message"
                                   multiline minRows={15}
                                   name="message"
                                   variant={"outlined"}
                                   onChange={handleChange}
                        />
                    <div align="center">
                        <button>Book</button>
                    </div>
                    </Grid>
                </Grid>
                </form>
            </Box>
        </Grid>
    );
}

/* mapping open hours (availabilities) and after click sends user to FormFn*/
function ShowAvailabilities({userDate, setUserDate, setTimeIsClicked}) {
    /* Triggered when selected time */
    const handleSubmit = (e) => {
        e.preventDefault()
        const time = e.target.value
        setTimeIsClicked(true)
        setUserDate({...userDate, time: time})
        console.log(time)
    }

    return <Grid item container justifyContent={"center"} xs={12} sm={6} md={6}>
        <Box className="row" p={5} sx={{position: {lg: "relative"}, right: "20%"}}>
            <Box px={0} textalign={"center"}>
                <p id={"availabilities"}>Availabilities</p>
            </Box>
            <Grid container>
                {availabilities.map(({time}) => (
                    <Grid item container justifyContent={"center"} xs={4} key={time} className="column timeBoxes-container">
                        <div>
                            <button className="time-btn" value={time} onClick={handleSubmit}>{time}</button>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Grid>
}

function ShowCalendar({setUserDate, userDate, setDateIsClicked}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

     /* Calendar shows only monday - friday */
     function disableWeekends(date) {
         return date.getDay() === 0 || date.getDay() === 6;
     }

    /* Triggered by selected date */
    const handleDateChange = (date) => {
        const momentFormat = moment(date).format("DD.MM.YYYY");
        setUserDate({...userDate, date: momentFormat})
        setDateIsClicked(true);
        setSelectedDate(date)
    }

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                    <Grid item container justifyContent={'center'} xs={12} sm={6} md={6}>
                        <Box sx={{position: {lg: "relative"}, left: "17%"}}>
                            <KeyboardDatePicker
                                variant='static'
                                id='date-picker'
                                label='Date Picker'
                                format='dd/MM/yyyy'
                                margin='normal'
                                disablePast
                                hintText="Weekends Disabled"
                                shouldDisableDate={disableWeekends}
                                disableToolbar
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{'aria-label': 'change date'}}
                            />
                        </Box>
                    </Grid>

                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </>
    );
}

export function Start() {
    const [dateIsClicked, setDateIsClicked] = useState(false)
    const [timeIsClicked, setTimeIsClicked] = useState(false)

    const [userData, setUserData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        telephone: '',
        date: '',
        time: '',
        message: '',
    });

    return (
        <Box style={{marginTop: 50}} textAlign={"center"}>
        <Typography variant={"h3"} color={"black"} gutterbottom="true">Schedule Meeting</Typography>
            <Progressbar />
        <Grid container justifyContent={'start'} spacing={1} alignItems={"center"} gutterbottom="true">
            <ShowCalendar
                userDate={userData}
                setUserDate={setUserData}
                setDateIsClicked={setDateIsClicked}
            />

            <ShowAvailabilities
                        userDate={userData}
                        setUserDate={setUserData}
                        setTimeIsClicked={setTimeIsClicked}
                    />

            <ShowForm
                userDate={userData}
                setUserDate={setUserData}
            />
        </Grid>
        </Box>
    )
}


