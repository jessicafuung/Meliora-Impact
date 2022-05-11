import React, {useState} from "react";
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import moment from 'moment';
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

export function Booking() {
    /* todays date */
    const [selectedDate, setSelectedDate] = useState(
        new Date()
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    function disableWeekends(date) {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    function convertUTCDateToLocalDate(date) {
        const iso = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
        const outputDate = moment(iso).format("dddd, DD.MM.YYYY");
        console.log("Moment: "+outputDate)
        return iso
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
                <KeyboardTimePicker />
            </Grid>
        </MuiPickersUtilsProvider>
        <h3>Your date (date picker): {selectedDate.getDate()} {selectedDate.getMonth()} {selectedDate.getFullYear()}</h3>
            <h3>ISO format: {convertUTCDateToLocalDate(selectedDate).toISOString()}</h3>
    </>
    );

}