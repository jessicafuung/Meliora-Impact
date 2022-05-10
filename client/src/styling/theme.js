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
});


export default theme