import { useState } from "react";
import React from "react";
import Button from '@mui/material/Button';


function contact() {

}

function contactForm() {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form>
            <div>
                <label>
                    Name
                    <input
                        id={"name"}
                        name={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Co. Name
                    <input
                        name={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email
                    <input
                        name={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Message
                </label>
                <textarea
                    name={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
            </div>
            <div>
                <Button variant={"contained"}>Submit</Button>
            </div>
        </form>
    )
}