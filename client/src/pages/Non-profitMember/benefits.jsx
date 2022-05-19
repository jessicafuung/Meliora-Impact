import React from "react"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./benefits.css";

export function Benefits(){
    return <>
    <div>
    <h1 style={{
        fontSize: 36,
        textAlign: "center"
    }}>Benefits</h1>
    <div style={{
        width: "5%",
        height: 2,
        backgroundColor: "#034F7A",
        margin: "auto",
        marginTop: 5,
        marginBottom: 100

    }}/>
    </div>
        <div className="containerBenefits">
            <div className="widthContainerBenefits">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <p className="textBenefits">
                                <strong>More nonprofits are going digital: payments, platforms, marketing and storytelling are done and supported online.</strong>
                                <br/>
                                <br/>
                                Individual donations via digital platforms have increased by 45% in 2020<br/> in Norway alone.
                                <br/>
                                <br/>
                                This trend means that nonprofits need to spend time and money to<br/> develop those new solutions.
                                Our platform gives the nonprofits exactly<br/> these tools (and more) for free, and ensures that also smaller nonprofits<br/> can be a part of the digitization without using up their own resources.
                            </p>
                            <h1 style={{marginTop: 50, marginBottom: 20, fontSize: 30, textAlign: "center"}}>Ready to get started?</h1>
                            <button className={"joinUsBtnBenefits"}>Join us</button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div>
                                <img className="benefitsImg" src={require("../../images/nonmemberprofit.svg")}/>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    </>
}