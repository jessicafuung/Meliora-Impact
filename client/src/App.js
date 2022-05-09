import React from "react"
import ReactDOM from "react-dom"
import Logo from "./components/assets/Logo"


const App = () => {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{textAlign: "center"}}>
        <Logo/>
        <h1>Hello Meliora</h1>
        </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))