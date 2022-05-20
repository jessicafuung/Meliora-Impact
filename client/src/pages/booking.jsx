import React, {useContext, useEffect, useState} from "react";
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
import {ThemeProvider} from "@material-ui/styles";

import {ApiContext} from "../../lib/useContext";
import {useLoading} from "../../lib/useLoader";
import materialTheme from "../styling/booking";

let bookedDate = "";
let bookedTime = "";

const availabilities = [
    {time: "08.30"},
    {time: "09.30"},
    {time: "10.30"},
    {time: "11.30"},
    {time: "12.30"},
    {time: "13.30"},
    {time: "14.30"},
    {time: "15.30"},
];

/* fetch booked times from DB */
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
        <form onSubmit={handleSubmit}>
            <div className="formInfo">
                <TextField required label={"Co. Name"}
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
            </div>

            <div className="formInfo">
                <TextField required color={"primary"}
                           label={"Name"}
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
            </div>

            <div className="formInfo">
                <TextField required label={"Email"}
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
            </div>

            <div className="formInfo">
                <TextField required label={"Telephone"}
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
            </div>

            <div className="formInfo">
                <TextField required label="Message"
                           multiline minRows={4}
                           name="message"
                           onChange={handleChange}/>
            </div>

            <div align="center">
                <button>Book</button>
            </div>
        </form>
    );
}

/* mapping open hours (availabilities) and after click sends user to FormFn*/
function ShowAvailabilities({userDate, setUserDate, setTimeIsClicked}) {
    const [selectedTime, setSelectedTime] = useState("");

    /* Triggered when selected time */
    function handleSubmit(e) {
        e.preventDefault()
        bookedTime = selectedTime
        setTimeIsClicked(true)
        setUserDate({...userDate, time: selectedTime})
    }


    return <div>
        <div style={{background: "red"}}>
            {availabilities.map(({time}) => (
                <ul key={time}>
                    <button value={time} onClick={(e) => setSelectedTime(e.target.value)}>{time}</button>
                </ul>
            ))}
        </div>

        <form onSubmit={handleSubmit}>
            <button>Select Time</button>
        </form>
    </div>
}

function ShowCalendar({setUserDate, userDate, setDateIsClicked}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [date, setDate] = useState("");

     /* Calendar shows only monday - friday */
     function disableWeekends(date) {
         return date.getDay() === 0 || date.getDay() === 6;
     }

    /* Triggered by selected date */
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

     /* Triggered everytime a date is selected. Todays date by default. */
     /* Convert to ISO format, then again formatting it again by using 'moment' */
     useEffect(() => {
         const iso = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60 * 1000);
         const momentFormat = moment(iso).format("DD.MM.YYYY");
         setDate(momentFormat)
     }, [selectedDate])

     /* Triggered by select button */
     function handleSubmit(e) {
         e.preventDefault();
         bookedDate = date;
         setDateIsClicked(true);
         setUserDate({...userDate, date: date})
     }

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                <Grid container spacing={2}>
                    <Grid item>
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
                            KeyboardButtonProps={{'aria-label': 'change date'}}/>
                    </Grid>

                </Grid>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
            <button onClick={handleSubmit}>Select date</button>
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


    return <div style={{marginTop: 50}}>
        <Box sx={{background: "green"}}>
            <Grid container spacing={5} justifyContent={"center"} alignItems={"center"}>

                <Grid item xs={4}>
                    <div>
                        {<ShowCalendar
                            userDate={userData}
                            setUserDate={setUserData}
                            setDateIsClicked={setDateIsClicked}/>}
                    </div>
                </Grid>

                <Grid item xs={4}>
                    {dateIsClicked &&
                        <ShowAvailabilities
                            userDate={userData}
                            setUserDate={setUserData}
                            setTimeIsClicked={setTimeIsClicked}
                        />
                    }
                </Grid>

                <Grid item xs={8} >
                    {timeIsClicked &&
                        <ShowForm
                            userDate={userData}
                            setUserDate={setUserData}
                        />
                    }
                </Grid>
            </Grid>
        </Box>
    </div>
}


