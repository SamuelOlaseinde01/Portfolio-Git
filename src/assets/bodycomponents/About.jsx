import React from "react";
import useEmblaCarousel from "embla-carousel-react";

function Carousel() {
    const [emblaRef] = useEmblaCarousel()
    return (
    <div ref={emblaRef}>
        <h1>Carousel</h1>
    </div>)
}

function About() {
    return (
    <section className="section-about" id="section-about">
    <div>
        <h1 className="about-h1">About</h1>
        <p>I am a Front-end Developer. I provide clean code and pixel perfect designs. I also make website
            more & more
            interactive with animations. I like to code things from scratch, and enjoy bringing ideas to life in
            the browser. I
            value simple content structure, clean design patterns, and thoughtful interactions. Things I enjoy
            designing: UX, UI,
            Web,

            Since beginning my journey as a freelance designer over 6 years ago, I've done remote work for
            agencies, consulted for
            startups, and collaborated with talented people to create digital products for both business and
            consumer use. I'm
            quietly confident, naturally curious, and perpetually working on improving my chops one design
            problem at a time..</p>
    </div>
    <div className="section-skill" id="section-skill">
        <h1 className="about-skill">Skills:</h1>
        <div className="icons">
            <div className="skills-icon">
                <div className="html-img">
                    <p className="img-text">HTML</p>
                    <img className="" src="html.png"/>
                </div>
                <div className="css-img">
                    <p className="img-text">CSS</p>
                    <img className="" src="css-3.png"/> 
                </div>
                <div className="javascript-img">
                    <p className="img-text">JavaScript</p>
                    <img className="" src="js.png"/> 
                </div>
            </div>
            <span className="react-skill">
                <div className="react-img">
                    <p className="img-text">React Js</p>
                    <img src="physics.png" className="react-image"/> 
                </div>
            </span>
        </div>
    </div>
</section>
)}

export default About