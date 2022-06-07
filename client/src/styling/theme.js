import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import "./style.css";

const primary = "#490374";
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
    fontFamily: "Lato",
    fontSize: 16,
  },
});
theme.typography.h1 = {
  fontSize: "4rem",
  fontWeight: "500",
  fontFamily: "Josefin Sans",
  "@media (min-width:375px)": {
    fontSize: "1.8rem",
  },
  "@media (max-width:375px)": {
    fontSize: "1.8rem",
  },
  "@media (min-width:768px)": {
    fontSize: "2.7rem",
  },
  "@media (min-width: 900px)": {
    fontSize: "3.7rem",
  },
  "@media (min-width: 1440px)": {
    fontSize: "4.5rem",
  },
};
theme.typography.h2 = {
  fontSize: "28px",
  fontWeight: "500",
  fontFamily: "Josefin Sans",
  "@media (min-width:600px)": {
    fontSize: "2.5rem",
  },
  "@media (min-width: 900px)": {
    fontSize: "3.5rem",
  },
};
theme.typography.h3 = {
  fontSize: "21px",
  fontWeight: '500',
  fontFamily: "Josefin Sans",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  "@media (min-width:768px)": {
    fontSize: "2rem",
  },
  "@media (min-width:1024px)": {
    fontSize: "2.2rem",
  },
  "@media (min-width:1440px)": {
    fontSize: "2.4rem",
  },
};
theme.typography.h4 = {
  fontSize: "20px",
  fontWeight: '500',
  fontFamily: "Josefin Sans",
  "@media (min-width:600px)": {
    fontSize: "1.3rem",
  },
  "@media (min-width:768px)": {
    fontSize: "1.7rem",
  },
  "@media (min-width:1024px)": {
    fontSize: "1.7rem",
  },
  "@media (min-width:1440px)": {
    fontSize: "1.8rem",
  },
};
theme.typography.h5 = {
  fontFamily: "Josefin Sans",
  fontWeight: '500',
};
theme.typography.h6 = {
  fontFamily: "Josefin Sans",
};
theme.typography.p = {
  fontFamily: "Lato",
};

export default theme;
