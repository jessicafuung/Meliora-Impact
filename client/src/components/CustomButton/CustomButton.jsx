import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'


const CustomButton = ({children, variant, w, h, to, p}) => {
  if(to === undefined){
    console.log(`%cCorrect usage: <CustomButton variant=\"contained | outlined | text\" to=\"/\">${children}</CustomButton>`, "color: #00ff00")
  }

  return (
    
        <Button variant={variant} as={Link} to={`${to}`} color="primary" style={{ padding: p, textDecoration: "none", fontWeight: 500, borderRadius: 0, textTransform: "none" }}>
            {children}
        </Button>
  )
}

export default CustomButton