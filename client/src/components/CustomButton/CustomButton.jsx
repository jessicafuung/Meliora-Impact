import React from 'react'
import Button from '@mui/material/Button'


const CustomButton = ({children, variant}) => {
  return (
        <Button variant={variant} color="primary" style={{ height: "40px", paddingLeft: "25px", paddingRight: "25px", fontWeight: "normal", borderRadius: 0, textTransform: "none" }}>
            {children}
        </Button>
  )
}

export default CustomButton