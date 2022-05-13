import Box from "@mui/material/Box";
import {Button, Container, Grid, Link, Typography} from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import './footer.css'
import Logo from "../assets/Logo";


export function Footer() {

    return (
        <footer className="footer">
            <Container>
                <Grid>
                    <Box className="footer-top">
                    <Box className="footer-collaborate">
                        <Grid item>
                        <Typography variant="h4" className="collaborate-text">
                            Interested in collaborating with us?
                        </Typography>
                        </Grid>
                    </Box>
                        <Grid item container alignItems="center" justifyContent="end" xs={12} className="contact-btn">
                            <Button variant="contained">Contact</Button>
                        </Grid>
                    </Box>
                </Grid>
            <Box borderTop={1} display="flex" flexDirection="row" justifyContent="space-between">
                    <Grid item className="footer-contact">
                    <Logo />
                    <Typography>
                        Peder Ankers plass 49, 0301 Oslo
                    </Typography>
                    <Typography>
                        +47 924 52 610
                    </Typography>
                    <Typography>
                        contact@melioraimpact.no
                    </Typography>
                </Grid>
                <Box className="footer-links" >
                    <Grid container display="flex" flexDirection="row" justifyContent="space-between">
                    <Grid display="flex" flexDirection="column">
                        <Typography fontWeight={600} className="footer-headline">
                            About us
                        </Typography>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>About</Link>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>Businesses</Link>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>Nonprofits</Link>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>FAQ</Link>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>Privacy Policy</Link>
                        </Grid>
                    <Grid display="flex" flexDirection="column">
                        <Typography fontWeight={600} className="footer-headline">
                            Follow us
                        </Typography>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>Instagram</Link>
                        <Link href="https://nc.linkedin.com/company/meliora-impact" style={{color: "white", fontSize: "17px"}}>LinkedIn</Link>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>Twitter</Link>
                        <Link href="/" style={{color: "white", fontSize: "17px"}}>Facebook</Link>
                    </Grid>
                        <Grid display="flex" flexDirection="column" className="footer-headline">
                            <Typography  fontWeight={600} >
                                Work with us
                            </Typography>
                            <Link href="/" style={{color: "white", fontSize: "17px"}}>Schedule meeting</Link>
                            <Link href="/" style={{color: "white", fontSize: "17px"}}>Corporate members</Link>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </footer>
    )
}