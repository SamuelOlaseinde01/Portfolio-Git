import React from "react";

function HomeSection(props) {
    console.log(props)
    return (
    <section className="section-home" id="section-home">
    <div className={props.hamburger ? "container" : "container inner"}>
    <img src="/images/Smilingman.jpeg" alt="" srcset="" className="smiling-img"/>
        <div className="h1andp">
            <h1 className="h1ofp">Hello</h1>
            <div className="ps">
                <p>My name is Samuel</p>
                <p> I am a Web developer</p>
            </div>
        </div>
    </div>
</section>)
}

export default HomeSection 