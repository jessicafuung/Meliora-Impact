import {createTheme} from "@material-ui/core";
import "./style.css"

const materialTheme = createTheme({
    overrides: {

        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "#034F7A",
                color: "white",
                height: "4rem",
                marginBottom: "0px"
            },
            daysHeader: {
                maxHeight: "23px",
                justifyContent: "space-around"

            },
            dayLabel: {
                color: "white",
                width: "18px",
                margin: "0 0px"
            },
            iconButton: {
                backgroundColor: "#034F7A"
            },
        },

        MuiIconButton: {
            root: {
                borderRadius: "15%",
                color: "white",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.2)"
                }
            }
        },

        MuiPickersDay: {
            dayDisabled: {
                color: "#A1A1A1",
                pointerEvents: "none"
            },
            day: {
                color: "white"
            },
            current: {
                color: "white"
            },
            daySelected: {
                backgroundColor: "rgb(255, 255, 255, 0.3)",
                "&:hover": {
                    backgroundColor: "rgb(255, 255, 255, 0.4)",
                }
            },
        },

        MuiTypography: {
            body1: {
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
                fontSize: "1rem",
                color: "white",
            },
            body2: {
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "300",
                fontSize: "1rem",
                color: "white",
            },
            caption: {
                fontSize: "1rem",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "300",
            }
        },

        MuiPickersBasePicker: {
            pickerView: {
                backgroundColor: "#034F7A",
                height: "23rem",
                minWidth: "384px"
            },
            pickerViewLandscape: {
                padding: "0"
            }
        },

        MuiGrid: {
            item: {
                boxSizing: "border-box",
            }
        },

        MuiPickersStaticWrapper: {
            staticWrapperRoot: {
                backgroundColor: "red",
                minWidth: "24rem",
            }
        },

        MuiPickersCalendar: {
            week: {
                justifyContent: "space-around",
                marginBottom: "5px"
            },
            transitionContainer: {
                marginTop: "0px"
            }
        },

        MuiSvgIcon: {
            root: {
                fontSize: "2rem"
            }
        }
    }
});

export default materialTheme