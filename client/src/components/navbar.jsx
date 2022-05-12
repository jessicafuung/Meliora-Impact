import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Grid,
    Link,
    Badge,
    MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../styling/style.css"

const headersData = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Privacy",
        href: "/privacy",
    },
    {
        title: "Log in",
        href: "/login",
    },
    {
        title: "Sign up",
        href: "/signup",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        paddingRight: "79px",
        paddingLeft: "65px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },

    menuButton: {
        color: "black",
        fontWeight: 700,
        size: "18px",
        marginRight: "30px",
        textTransform: "capitalize",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },

    paper: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        //width: 400,
        color: "#FFFFFF",
        backgroundColor: "#209b59",
    },
    typography: {
        fontFamily: "Montserrat",
    },
}));
export default function Header() {


    const classes = useStyles();

    const { header, menuButton, toolbar, drawerContainer, paper } =
        useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                <a href="/"><p className="header-logo">Meliora <strong>impact</strong></p></a>
                <nav>
                    <ul>
                        {getMenuButtons()}
                    </ul>
                </nav>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <AppBar style={{ backgroundColor: "rgba(255,238,238,0.2)", boxShadow: "none" }}>
                <Toolbar>

                        <h1 style={{ flexGrow: 1 }} className="header-logo">
                            <img src="https://i.postimg.cc/XYN8RB16/logo2.png"/>
                        </h1>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon color="white" />
                    </IconButton>

                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerClose}
                        classes={{ paper: classes.paper }}
                    >
                        <div className={drawerContainer}>{getDrawerChoices()}</div>
                    </Drawer>
                </Toolbar>
            </AppBar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ title, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: title,
                    }}
                >
                    <MenuItem>{title}</MenuItem>
                </Link>
            );
        });
    };

    const getMenuButtons = () => {
        return (
            <>
                <Button
                    color="primary"
                    to="/"
                    component={RouterLink}
                    className={menuButton}
                    style={{fontSize: 18, fontFamily: "Montserrat", color: "white", textTransform: "capitalize"}}
                >
                    Home
                </Button>
                <Button
                    color="primary"
                    to="/about"
                    component={RouterLink}
                    className={menuButton}
                    style={{fontSize: 18, fontFamily: "Montserrat", color: "white", textTransform: "capitalize"}}
                >
                    About
                </Button>
                <Button
                    color="primary"
                    to="/contact"
                    component={RouterLink}
                    className={menuButton}
                    style={{fontSize: 18, fontFamily: "Montserrat", color: "white", textTransform: "capitalize"}}
                >
                    Contact
                </Button>
                <Button
                    color="primary"
                    to="/privacy"
                    component={RouterLink}
                    className={menuButton}
                    style={{fontSize: 18, fontFamily: "Montserrat", color: "white", textTransform: "capitalize"}}
                >

                    Privacy
                </Button>
                <Button
                    color="primary"
                    to="/login"
                    component={RouterLink}
                    className={menuButton}
                    style={{fontSize: 18, fontFamily: "Montserrat", color: "white", textTransform: "capitalize"}}
                >

                    Log in
                </Button>
                <Button
                    color="primary"
                    to="/Sign up"
                    component={RouterLink}
                    className={menuButton}
                    style={{fontSize: 18, fontFamily: "Montserrat", color: "white", textTransform: "capitalize"}}
                >

                    Sign up
                </Button>

            </>
        );
    };

    return (
        <header>
            <AppBar
                position="sticky"
                style={{backgroundColor: "rgba(255,238,238,0.2)", boxShadow: "none", marginBottom: -150}}
                className={header}
            >
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}