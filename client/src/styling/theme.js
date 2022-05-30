import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const primary = "#034F7A";
const textPrimary = "#212121";
const theme = createTheme({

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
          fontSize: "16px",
               },
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
