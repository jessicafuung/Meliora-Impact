import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import "./style.css"

const primary = "#034F7A";
const textPrimary = "#212121";
const theme = createTheme({

    overrides: {
        MuiPickersCalendarHeader: {
            switchHeader: {
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
                backgroundColor: primary
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
                fontWeight: "300",
                fontSize: "24px",
                color: "white",
                lineHeight: "0.8"

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
    },

  palette: {
    primary: {
      main: primary,
    },
    text: {
      primary: textPrimary,
    },
    secondary: {
      main: green[500],
    },
  },

  typography: {
          fontFamily: "Montserrat",
          fontSize: 16,
  }
});
theme.typography.h1 = {
    fontSize: '4rem',
    fontFamily: 'Montserrat',
    '@media (min-width:375px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width:375px)': {
      fontSize: '1.8rem',
    },
    '@media (min-width:768px)': {
      fontSize: '2.7rem',
    },
    '@media (min-width: 900px)':{
      fontSize: "3.7rem",
    },
    '@media (min-width: 1440px)':{
      fontSize: "4.5rem",
    }
}
theme.typography.h2 = {
    fontSize: '28px',
    fontFamily: 'Montserrat',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',

    },
    '@media (min-width: 900px)':{
      fontSize: "3.5rem",
    }
}
theme.typography.h3 = {
    fontSize: '21px',
    fontFamily: 'Montserrat',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:768px)': {
      fontSize: '2rem',
    },
    '@media (min-width:1024px)': {
      fontSize: '2.2rem',
    },
    '@media (min-width:1440px)': {
      fontSize: '2.4rem',
    },
}

theme.paragraph

export default theme;
