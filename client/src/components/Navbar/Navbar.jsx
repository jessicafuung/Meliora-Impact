import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assets/Logo';

const Navbar = () => {
    const [navbar, setNavbar] = React.useState(false);

  
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className='main'>
    <div className="navbar-container">
    <div className={navbar ? "navbar active" : "navbar"}>
            <Logo/>
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
  )
}

export default Navbar