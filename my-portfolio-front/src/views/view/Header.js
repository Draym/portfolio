import React from "react";
import CParticles from "../components/CParticles";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
    return (
        <header id="header" className="masthead">
            <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
                <li><span>Image 04</span></li>
                <li className="header-container particle-network-animation">
                    <div className="header-title vertical-align">
                        <div className="header-title-head"><p>Hey, I'm</p></div>
                        <div className="header-title-value"><p>Kevin Andres</p></div>
                        <div className="header-title-info"><p>Software Engineer</p></div>
                    </div>
                </li>
            </ul>
            <CParticles />
            <AnchorLink href="#profile">
                <div className="arrow">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </AnchorLink>
        </header>
    );
}

export default Header;


