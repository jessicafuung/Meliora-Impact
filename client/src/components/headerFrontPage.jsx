import React from "react"

import React from "react"
import "./headerFrontPage.css"

export function HeaderFrontPage(){
    return <>
        <div className="header">
            <div>
                <p className="top">t</p>
                <img className="titleImage" src="https://i.postimg.cc/Kjwnys4K/Meliora-title.png"/>
                <p className="description">A digital platform where <strong><em>companies</em></strong><br/>
                    can give to nonprofits in a more<br/> <strong><em>impactful</em></strong>
                    and <strong><em>sustainable</em></strong> way</p>
            </div>
            <button className="consultationBtn"><strong>Book a Consultation</strong></button>
        </div>
    </>
}