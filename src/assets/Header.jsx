import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Header(props) {
    console.log(props.hamburger)
    return (
        <header className="header">
        <nav className="navbar">
            <h3 className="name">{"<Samuel>"}</h3>
            <div className={props.hamburger ? "hamburger" : "hamburger inner"} onClick={props.onclick}>
                <span className={props.hamburger ? "span1" : "span1 inner"} onClick={props.onclick}></span>
                <span className={props.hamburger ? "span2" : "span2 inner"} onClick={props.onclick}></span>
                <span className={props.hamburger ? "span3" : "span3 inner"} onClick={props.onclick}></span>
            </div>
            <div className={props.hamburger ? "nav-nav" : "nav-nav inner"}>
                <div className={props.hamburger ? "nav" : "nav inner"}>
                    <h1 className="samm">{"<Samuel>"}</h1>
                    <li><a href="#section-home" onClick={props.onclick}>Home</a></li>
                    <li><a href="#section-about" onClick={props.onclick}>About</a></li>
                    <li><a href="#section-skill" onClick={props.onclick}>Skills</a></li>
                    <li><a href="#section-services" onClick={props.onclick}>Services</a></li>
                    <div className="icons-fa">
                        <a href="https://www.facebook.com/olaseinde.samuel.77" target="blank"><FaFacebook className="icon"/></a>
                        <a href="https://x.com/SamuelOlaseind2" target="blank"><FaTwitter className="icon"/></a>
                        <a href="https://www.instagram.com/samuelolaseinde?igsh=MXY5NTN4emNzeTcycQ==" target="blank"><FaInstagram className="icon"/></a>
                        <a href="https://wa.me/9065363058" target="blank"><FaWhatsapp className="icon"/></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Header