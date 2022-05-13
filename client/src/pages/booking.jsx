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

import {ApiContext} from "../../lib/useContext";
import {useLoading} from "../../lib/useLoader";

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

let bookedDate = "";
let bookedTime = "";

/* fetch booked times from DB */
export function GetBookings() {
    const { listTimes } = useContext(ApiContext);
    const [isBooked, setIsBooked] = useState("false")
    const { loading, error, data } = useLoading(
        async () => await listTimes({isBooked}), [isBooked]
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

function FormSchema() {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [telephone, setTelephone] = useState("");

    console.log("name: "+name)
    console.log("co. name: "+companyName)
    console.log("email: "+email)
    console.log("message: "+message)
    console.log("telephone: "+telephone)

    return (
        <form>
            <div className="formInfo">
                <TextField required label={"Co. Name"}
                           variant={"standard"}
                           onChange={(e) => setCompanyName(e.target.value)}
                           InputProps={{endAdornment: (
                                <InputAdornment position="end">
                                    <BusinessIcon color={"primary"}/>
                                </InputAdornment>)}}
                />
            </div>

            <div className="formInfo">
                <TextField required color={"primary"}
                           label={"Name"}
                           variant={"standard"}
                           onChange={(e) => setName(e.target.value)}
                           InputProps={{endAdornment: (
                                   <InputAdornment position="end">
                                       <PersonIcon color={"primary"}/>
                                   </InputAdornment>)}}
                />
            </div>

            <div className="formInfo">
                <TextField required label={"Email"}
                           variant={"standard"}
                           onChange={(e) => setEmail(e.target.value)}
                           InputProps={{endAdornment: (
                                <InputAdornment position="end">
                                    <EmailIcon color={"primary"}/>
                                </InputAdornment>)}}
                />
            </div>

            <div className="formInfo">
                <TextField required label={"Telephone"}
                           variant={"standard"}
                           onChange={(e) => setTelephone(e.target.value)}
                           InputProps={{endAdornment: (
                               <InputAdornment position="end">
                                   <PhoneIcon color={"primary"}/>
                               </InputAdornment>)}}
            />
            </div>

            <div className="formInfo">
                <TextField required label="Message"
                           multiline minRows={4}
                           onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div align="center">
                <button>Submit</button>
            </div>
        </form>
    );
}

/* mapping open hours (availabilities) and */
function GetOpenHours() {
    const [selectedTime, setSelectedTime] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    bookedTime = selectedTime

    /* Triggered when selected time */
    function handleSubmit(e) {
        e.preventDefault()
        setIsClicked(true)
    }

    return <div>
            <p>Selected time: {bookedTime}</p>
            {availabilities.map(({time}) => (
                <ul key={time}>
                    <button value={time} onClick={(e) => setSelectedTime(e.target.value)}>{time}</button>
                </ul>
            ))}
        {isClicked?<FormSchema />:<div>Not clicked yet</div>}

        <form onSubmit={handleSubmit}>
            <button>Select Time</button>
        </form>
    </div>
}

/**
 * 3. Ved booking legg inn isBooked = true
 ***/

export function Booking() {
    const { postBooking } = useContext(ApiContext);
    const [selectedDate, setSelectedDate] = useState( new Date() );
    const [date, setDate] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    /* Triggered everytime a date is selected. Todays date by default. */
    /* Convert to ISO format, then again formatting it again by using 'moment' */
    useEffect(() => {
        const iso = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60 * 1000);
        const momentFormat = moment(iso).format("DD.MM.YYYY");
        setDate(momentFormat)
    }, [selectedDate])

    /* Triggered by form onSubmit */
    function handleSubmit(e) {
        e.preventDefault()
        setIsClicked(true)
        bookedDate = date
        postBooking({date})
    }

    /* Sets new selected date */
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    /* Calendar shows only monday - friday */
    function disableWeekends(date) {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent='space-around'>
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
                        KeyboardButtonProps={{'aria-label':'change date'}}
                    />

                    {isClicked?<GetOpenHours />:<div>Not clicked yet</div>}

                    <div>isbooked: false {<GetBookings />}</div>
                </Grid>
            </MuiPickersUtilsProvider>

            <p>Selected date: {bookedDate}</p>
            <form onSubmit={handleSubmit}>
                <button>Select date</button>
            </form>
        </>
    );

}

