import React from "react"
import ReactDOM from "react-dom"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material";
import theme from "./styling/theme"



export const App = () => {
    return(
        <>
        <ThemeProvider theme={theme}>
            <Typography color="text.primary" variant="h4" component="h2">
            Hello Meliora
            </Typography>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </ThemeProvider>
        </>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))