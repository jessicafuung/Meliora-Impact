import React, {useContext, useEffect, useState} from "react";
import "date-fns"
import moment from 'moment';
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Box from '@mui/material/Box';

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

/* mapping open hours (availabilities) */
function GetOpenHours() {
    const [selectedTime, setSelectedTime] = useState("");

    return <div>
        {availabilities.map(({time}) => (
            <ul key={time}><button>{time}</button></ul>
        ))}
    </div>
}

/**
 * 1. Legg inn isBooked i DB
 * 2. List ut kun "false" fra serveren
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

                            {isClicked?
                                    <GetOpenHours />
                                :<div>Not clicked yet</div>
                            }

                            {<GetBookings />}
                            {<GetOpenHours />}
                    </Grid>
                </MuiPickersUtilsProvider>

            <form onSubmit={handleSubmit}>
                <button>Select date</button>
            </form>

            <p>Date to DB: {date}</p>
        </>
    );

}

