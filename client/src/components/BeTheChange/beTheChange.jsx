import React from "react"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./beTheChange.css"

export function BeTheChange() {
    return (
        <><div className="container">
            <div>
                <h1 style={{
                    fontSize: 36,
                    color: "#034F7A",
                    textAlign: "center"
                }}>Be the Change</h1>
                <div style={{
                    width: "15%",
                    height: 2,
                    backgroundColor: "#034F7A",
                    margin: "auto",
                    marginTop: 5

                }}/>
                <p style={{
                    textAlign: "center",
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    A few highlights from what our members has helped us accomplish<br/> so far.
                </p>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={6}>
                        <div className="image1"/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="text1">
                            <img style={{
                                width: 320,
                                height: 129,
                                marginTop: 45,
                                marginLeft: 45,
                                marginBottom: 90,
                            }}
                                 src={require("../../images/KristianiaUniversityCollege_sort_rgb 1.svg")}
                            />
                            <p style={{
                                textAlign: "left",
                                marginLeft: 45,
                            }}className="description">
                                The donations <strong><em>Kristiania University College</em></strong> has made has contributed<br/>
                                with us being able to build <strong><em>50</em></strong> more schools.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <div style={{height: 30}}/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={6}>
                        <div className="text2">
                            <img style={{
                                width: 394,
                                height: 82,
                                marginTop: 45,
                                marginRight: 45,
                                marginBottom: 90,
                                float: "right"
                            }} src={require("../../images/PhotoFindr.svg")}/>
                            <p style={{
                                clear: "right",
                                textAlign: "right",
                                marginRight: 45,
                            }} className="description">
                                <strong><em>PhotoFindr</em></strong> has helped us build wells and give clean water to <strong><em>10</em></strong> different<br/> villages,
                            that never have had access to it before
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="image2"/>
                    </Grid>
                </Grid>
            </Box>
        </div>
        </>
    )
}