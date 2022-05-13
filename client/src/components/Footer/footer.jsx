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
            <Box borderTop={1} display="flex" flexDirection="row">
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
                <Box>
                    <Grid display="flex" flexDirection="column" className="footer-links">
                        <Typography>
                            About us!
                        </Typography>
                        <Link href="/" style={{color: "white", fontSize: "10px"}}>About</Link>
                        <Link href="/" style={{color: "white", fontSize: "10px"}}>Businesses</Link>
                        <Link href="/" style={{color: "white", fontSize: "10px"}}>Nonprofits</Link>
                        <Link href="/" style={{color: "white", fontSize: "10px"}}>FAQ</Link>
                        <Link href="/" style={{color: "white", fontSize: "10px"}}>Privacy Policy</Link>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </footer>
    )
}