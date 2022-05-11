import {createTheme} from "@mui/material/styles"
import { green, purple } from '@mui/material/colors';

const primary = "#EAC14B"

const theme = createTheme({
  palette: {
    primary: {
        main: primary
    },
    text: {
      primary: primary,
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 16,
  },
});


export default theme