import React from "react";
import Header from "./assets/Header";
import Body from "./assets/Body";
import "./style.css"
function App() {
    const [hamburgerState, setHamburgerState] = React.useState(true) 

    function hamstate() {
        setHamburgerState(() => {
            return !hamburgerState
        })
    }
    return ( 
    <>
        <Header onclick={hamstate} hamburger={hamburgerState}/>
        <Body onclick={hamstate} hamburger={hamburgerState}/>
    </>
    )
}

export default App