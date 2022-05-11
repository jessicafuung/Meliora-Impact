import React from "react";
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

export function Booking() {
    /* todays date */
    const [selectedDate, setSelectedDate] = React.useState(
        new Date()
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='space-around'>
                <KeyboardDatePicker
                disableToolbar
                variant='static'
                format='MM/dd/yyy'
                margin='normal'
                id='date-picker'
                label='Date Picker'
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{'aria-label':'change date'}}
                />
                <KeyboardTimePicker />
            </Grid>
        </MuiPickersUtilsProvider>
        <p>Your date: {selectedDate.getDate()}</p>
    </>

}