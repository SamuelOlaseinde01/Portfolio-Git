import React, { useRef } from "react";
import Header from "./assets/Header";
import Body from "./assets/Body";
import "./style.css"


function App() {
    const hamref = useRef(null)
    const [hamburgerState, setHamburgerState] = React.useState(false) 
    const [nullState, setNullState] = React.useState(null)

    function hamstate() {
        setHamburgerState(() => {
            return !hamburgerState
        })
        if(!hamburgerState) {
            document.addEventListener("click", handleOutsideCLick)
        } else {
            document.removeEventListener("click", handleOutsideCLick)
        }
    }

    function handleOutsideCLick(event) {
        const hamburge = hamref.current
        if(!hamburge.contains(event.target)) {
            setHamburgerState(() => {
                return hamburgerState
            })
        }
    }

    const appContent = (
        <body className={hamburgerState ? "body inner" : "body"}>
            <Header onclick={hamstate} hamburger={hamburgerState} ref={hamref}/>
            <Body onclick={hamstate} hamburger={hamburgerState}/>
        </body>
    )
    return ( 
        <>
        {nullState ? ("Loading...." ) : appContent}
        </>
    )  
}

export default App