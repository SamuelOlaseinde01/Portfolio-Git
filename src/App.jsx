import React from "react";
import Header from "./assets/Header";
import Body from "./assets/Body";
import "./style.css"
function App() {
    const [hamburgerState, setHamburgerState] = React.useState(true) 
    const [nullState, setNullState] = React.useState(null)

    function hamstate() {
        setHamburgerState(() => {
            return !hamburgerState
        })
    }

    const appContent = (
        <>
            <Header onclick={hamstate} hamburger={hamburgerState}/>
            <Body onclick={hamstate} hamburger={hamburgerState}/>
        </>
    )
    return ( 
        <>
        {nullState ? ("Loading...." ) : appContent}
        </>
    )  
}

export default App