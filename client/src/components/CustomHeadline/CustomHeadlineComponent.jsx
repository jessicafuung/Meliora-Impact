import React from "react";
import './CustomHeadlineStyle.css'
import { Typography } from '@mui/material';


const CustomHeadline = ({children}) => {

    return (

        <div className='headline-container'>
            {/* THE COLOR ON THIS SHOULD CHANGE WHEN THE PRIMARY COLOR THEME GETS IMPLEMENTED CORRECTLY */}
            <Typography variant="h3" color="primary" className="title">{children}</Typography>
            <div className="line" />
        </div>
    )
}

export default CustomHeadline;

