import React from "react"
import "./header.css"

export function HeaderWater(){
    return <>
        <div className="header">
            <div>
                <p className="top">t</p>
                <p className="headline"><strong>Water</strong></p>
                <p className="description"><strong><em>785 million</em></strong> people in the world live <strong><em>without</em></strong><br/> clean water.</p>
            </div>
            <button className="consultationBtn"><strong>Book a Consultation</strong></button>
        </div>
    </>
}