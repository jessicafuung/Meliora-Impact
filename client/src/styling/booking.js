import {createTheme} from "@material-ui/core";
import "./style.css"

const materialTheme = createTheme({
    overrides: {

        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "#034F7A",
                color: "white",
            },
            dayLabel: {
                color: "white"
            },
            iconButton: {
                backgroundColor: "#034F7A"
            }
        },



        MuiIconButton: {
            root: {
                borderRadius: "15%"
            }
        },

        MuiTypography: {
            
            body1: {
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "200",
                color: "white",
            },
            body2: {
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "200",
                color: "white"
            },
            caption: {
                fontSize: "0.75rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "200",
            }
        },

        MuiPickersBasePicker: {
            pickerView: {
                backgroundColor: "#034F7A",
                color: "white",
            },
        },
    },
});

export default materialTheme