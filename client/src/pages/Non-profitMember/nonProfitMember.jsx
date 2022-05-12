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
                    <p className="headline"><strong>Non-profit <em>members</em></strong></p>
                    <p className="description">There's often no solid <em>philanthropic</em> strategy and<br/> nonprofits are picked on an <em>ad-hoc basis.</em></p>
                </div>
            </div>
        </div>
        <div style={{height: 100}}/>
        <Benefits />
        <div style={{height: 100}}/>
        <Services />
        <div style={{height: 100}}/>
        <img src={require("../../images/Footer.svg")} width={"100%"}/>


    </>
}