import React from "react";

function HomeSection(props) {
    console.log(props)
    return (
    <section className="section-home" id="section-home">
    <div className={props.hamburger ? "container" : "container inner"}>
        <div className="h1andp">
            <img src="src/images/smilingman.jpeg" alt="" srcset="" className="smiling-img"/>
            <h1>Hello</h1>
            <p>My name is Samuel, I am a Web developer</p>
        </div>
    </div>
</section>)

}

export default HomeSection 