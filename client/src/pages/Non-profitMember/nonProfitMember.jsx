import React from "react"
import "./nonProfitMember.css"
import {Benefits} from "./benefits";
import {Services} from "./services";
export function NonProfit(){
    return <>
        <div>
            <div className="header">
                <div>
                    <p className="top">t</p>
                    <p className="headline"><strong>Non-profit members</strong></p>
                    <p className="description">There's often no solid philanthropic strategy and<br/> nonprofits are picked on an ad-hoc basis.k</p>
                </div>
            </div>
        </div>
        <div style={{height: 90}}></div>
        <Benefits />
        <div style={{height: 90}}></div>
        <Services />
        <div style={{height: 90}}></div>
        <img src={require("../../images/Footer.svg")} width={"100%"}/>


    </>
}