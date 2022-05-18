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


import {ApiContext} from "../../lib/useContext";
import {useLoading} from "../../lib/useLoader";

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

function ShowForm() {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [telephone, setTelephone] = useState("");

    console.log(name)
    console.log(companyName)
    console.log(email)
    console.log(message)
    console.log(telephone)

    return (
        <form>
            <div className="formInfo">
                <TextField required label={"Co. Name"}
                           variant={"standard"}
                           onChange={(e) => setCompanyName(e.target.value)}
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
                           onChange={(e) => setName(e.target.value)}
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
                           onChange={(e) => setEmail(e.target.value)}
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
                           onChange={(e) => setTelephone(e.target.value)}
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
                           onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div align="center">
                <button>Book</button>
            </div>
        </form>
    );
}

/* mapping open hours (availabilities) and after click sends user to FormFn*/
function ShowAvailabilities() {
    const [selectedTime, setSelectedTime] = useState("");

    /* Triggered when selected time */
    function handleSubmit(e) {
        e.preventDefault()
        bookedTime = selectedTime
        console.log(bookedTime)
    }


    return <div>
            {availabilities.map(({time}) => (
                <ul key={time}>
                    <button value={time} onClick={(e) => setSelectedTime(e.target.value)}>{time}</button>
                </ul>
            ))}

        <form onSubmit={handleSubmit}>
            <button>Select Time</button>
        </form>
    </div>
}

function ShowCalendar() {
    /*const { postBooking } = useContext(ApiContext);*/
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
         /*setIsClickedDate(true);*/
         bookedDate = date;
         console.log("booked date: "+bookedDate)
         /*postBooking({date})*/
     }

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
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

                    <button onClick={handleSubmit}>Select date</button>
                </Grid>
            </MuiPickersUtilsProvider>
        </>
    );
}

export function Start() {
    return <div style={{marginTop: 50}}>
        <Box sx={{background: "white"}}>
            <Grid container spacing={5} justifyContent={"center"} alignItems={"center"}>

                <Grid item xs={4}>
                    <div style={{backgroundColor: "rgba(39, 34, 186, 0.3)"}}>
                        {<ShowCalendar/>}
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <ShowAvailabilities/>
                </Grid>

                <Grid item xs={8} >
                   <ShowForm/>
                </Grid>

            </Grid>
        </Box>
    </div>
}


