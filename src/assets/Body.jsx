import React from "react";
import About from "./bodycomponents/About";
import HomeSection from "./bodycomponents/HomeSection";

function Body(props) {
    return (
    <>
        <HomeSection onclick={props.onclick} hamburger={props.hamburger}/>
        <About/>
    </>
    )
}

export default Body