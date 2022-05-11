import React from 'react'

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Logo from '../assets/Logo';
import PersonIcon from '@mui/icons-material/Person';
import "./Navbar.css"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  
  return (
    <>
      <div className="navbar-container">
        <div className={navbar ? "navbar active" : "navbar"}>
          <div className="navbar-content">
            <div className="logo-container">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Logo/>
              </Link>
            </div>
            <div className="link-container">
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
        </div>
            <div style={{marginLeft: "15px", marginRight: "15px"}}>
             <span className='divider'/>
            </div>
            <PersonIcon sx={{marginRight: "15px", color: "#FFF"}}/>
            <div className="links">
            <Link className="strong" to="/login">Log in</Link>
            <Link className="strong" to="/signup">Sign up</Link>
            </div>
        </div>
                </div>
                </div>
      </div>
    </>
  );
};




export default Navbar