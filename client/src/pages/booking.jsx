import React, {useContext, useEffect, useState} from "react";
import "date-fns"
import moment from 'moment';
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

import {ApiContext} from "../../lib/useContext";

export function Booking() {
    const { postBooking } = useContext(ApiContext)

    const [selectedDate, setSelectedDate] = useState( new Date() )
    const [date, setDate] = useState("")

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
        postBooking({date})
    }

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    function disableWeekends(date) {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
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

                            <KeyboardTimePicker


                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </ul>

                <button>Book</button>
            </form>
        </>
    );

}

