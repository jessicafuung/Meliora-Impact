import React from "react"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./services.css"

export function Services(){
    return<>
        <div>
            <h1 style={{
                fontSize: 36,
                textAlign: "center"
            }}>Services</h1>
            <div style={{
                width: "5%",
                height: 2,
                backgroundColor: "#034F7A",
                margin: "auto",
                marginTop: 5,
                marginBottom: 50

            }}/>
        </div>
        <div className="containerServices">
            <div className="widthContainer">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <div style={{textAlign: "center", marginTop: 10}}>
                                <img  src={require("../../images/foundingicon.svg")}/>
                                <p style={{
                                    fontSize: 18,
                                    color: "#034F7A",
                                    marginTop: 10,
                                }}><strong>Funding</strong></p>
                                <p style={{
                                    fontSize: 16,
                                    marginTop: 8
                                }}>
                                    <strong>Regular</strong> funding<br/> stream
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div style={{textAlign: "center", margin: 20}}>
                                <img  src={require("../../images/platfromicon.svg")}/>
                                <p style={{
                                    fontSize: 18,
                                    color: "#034F7A",
                                    marginTop: 10
                                }}><strong>Platform</strong></p>
                                <p style={{
                                    fontSize: 16,
                                    marginTop: 8
                                }}>
                                    One platform <strong>connecting</strong><br/>them to their<br/><strong>donors</strong>
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div style={{textAlign: "center", margin: 20}}>
                                <img  src={require("../../images/toolsicon.svg")}/>
                                <p style={{
                                    fontSize: 18,
                                    color: "#034F7A",
                                    marginTop: 10
                                }}><strong>Tools</strong></p>
                                <p style={{
                                    fontSize: 16,
                                    marginTop: 8
                                }}>
                                    <strong>Free</strong> digital<br/> tools
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>

    </>
}