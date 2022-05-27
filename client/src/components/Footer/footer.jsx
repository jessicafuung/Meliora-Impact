import Box from "@mui/material/Box";
import { Button, Container, Grid, Link, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import "./footer.css";
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
            <Grid
              item
              container
              alignItems="center"
              justifyContent="end"
              xs={12}
              className="contact-btn"
            >
              <CustomButton to="/contact" variant="contained">
                Contact
              </CustomButton>
            </Grid>
          </Box>
        </Grid>
        <Box
          borderTop={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Grid item className="footer-contact">
            <Logo />
            <Typography>Peder Ankers plass 49, 0301 Oslo</Typography>
            <Typography>+47 924 52 610</Typography>
            <Typography>contact@melioraimpact.no</Typography>
            <Box>
              <Typography
                style={{ color: "gray", fontSize: "10px", paddingTop: "3.5em" }}
              >
                © 2022 Meliora Impact. All rights reserved.
              </Typography>
            </Box>
          </Grid>
          <Box className="footer-links">
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Grid display="flex" flexDirection="column">
                <Typography fontWeight={600} className="footer-headline">
                  About us
                </Typography>
                <Link
                  href="/about"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  About
                </Link>
                <Link
                  href="/corporate"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Businesses
                </Link>
                <Link
                  href="/nonprofit"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Nonprofits
                </Link>
                <Link
                  href="/faq"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  FAQ
                </Link>
                <Link
                  href="/privacy"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Privacy Policy
                </Link>
              </Grid>
              <Grid display="flex" flexDirection="column">
                <Typography fontWeight={600} className="footer-headline">
                  Follow us
                </Typography>
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Instagram
                </Link>
                <Link
                  href="https://nc.linkedin.com/company/meliora-impact"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  LinkedIn
                </Link>
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Twitter
                </Link>
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Facebook
                </Link>
              </Grid>
              <Grid display="flex" flexDirection="column">
                <Typography fontWeight={600} className="footer-headline">
                  Work with us
                </Typography>
                <Link
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Schedule meeting
                </Link>
                <Link
                  to="/corporate"
                  style={{
                    color: "white",
                    fontSize: "17px",
                    paddingBottom: "0.5em",
                  }}
                >
                  Corporate members
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
