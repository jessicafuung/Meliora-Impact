import Box from "@mui/material/Box";
import { Button, Container, Grid, Link, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import './footer2.css'
import Logo from "../assets/Logo";
import {Twitter, Instagram, LinkedIn, Facebook} from '@mui/icons-material';

export function Footer2(){
    return (
        <footer className={'footer-container'}>
            <Box sx={{bgcolor: '#034F7A',
                paddingY: '3rem',
                borderTopRightRadius: { xs: '0', md: '21.875rem'}
            }}>
                <Container>
                    {/*Top of footer*/}
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={12} sm={8} md={8}  sx={{
                            textAlign: {xs: 'center',
                                md: 'left'},
                            fontSize: { xs: '36px', md: '48px'},
                            color: '#ffffff'
                            }}>
                            <h2>Interested in collaborating with us?</h2>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} container justifyContent={{md: "left", xs: "center"}} textAlign={'center'}>
                            <Button sx={{
                                backgroundColor: '#EED655',
                                color: '#212121',
                                borderRadius: '0',
                                paddingX: '2rem',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                marginTop: { xs: '1rem', sm: '1 rem', md: '0'}

                            }}>Contact</Button>
                        </Grid>
                    </Grid>

                    {/*SoMe footer section*/}
                    <Grid container alignItems={'center'} sx={ { marginTop: '2rem'}}>
                        <Grid item xs={3} textAlign={'center'}>
                            <Instagram className={'soMe-icons'}
                                sx={{
                                    fontSize: {xs: '35px', lg: '50px'},
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} textAlign={'center'}>
                            <LinkedIn className={'soMe-icons'} sx={{
                                fontSize: {xs: '35px', lg: '50px'}
                            }}/>
                        </Grid>
                        <Grid item xs={3} textAlign={'center'}>
                            <Facebook className={'soMe-icons'}
                                sx={{
                                    fontSize: {xs: '35px', lg: '50px'}
                                }}
                            />
                        </Grid>
                        <Grid item xs={3} textAlign={'center'}>
                            <Twitter className={'soMe-icons'}
                                sx={{
                                    fontSize: {xs: '35px', lg: '50px'}
                                }}
                            />
                        </Grid>
                    </Grid>

                    {/*Middle section of footer*/}
                    <Grid container sx={{marginTop: '2rem'}}>
                        <Grid item textAlign={'center'} xs={12} sm={4} md={4}
                              sx={{ color: 'white'}}
                        >
                            <Logo sx={{display: {sm: 'none', md: 'block'}}}></Logo>
                            <p className={'meliora-info'}>Peder ankers plass 49, 0301 Oslo</p>
                            <p className={'meliora-info'}>+47  924 52 610</p>
                            <p className={'meliora-info'}>contact@melioraimpact.no</p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} sx={{textAlign: 'center',
                            marginTop: {xs: '3rem', sm: '0'}
                        }} >
                            <h3 className={'footer-heading'}>About us</h3>
                            <p className={'footer-links'}>About</p>
                            <p className={'footer-links'}>Businesses</p>
                            <p className={'footer-links'}>Nonprofits</p>
                            <p className={'footer-links'}>FAQ</p>
                            <p className={'footer-links'}>Privacy Policy</p>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} sx={{textAlign: 'center',
                            marginTop: {xs: '3rem', sm: '0'}
                        }}>
                            <h3 className={'footer-heading'}>Work with us</h3>
                            <p className={'footer-links'}>Schedule meeting</p>
                            <p className={'footer-links'}>Corporate members</p>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item textAlign={'center'} xs={12} sx={{marginTop: {xs: '1rem', sm: '0'}}}>
                            <p className={'copy-right'}>© 2022 Meliora Impact. All rights reserved.</p>
                        </Grid>
                    </Grid>





                </Container>
            </Box>
        </footer>
    );
}