import React from "react";
import CParticles from "../components/CParticles";

function Header() {
    return (
        <header id="header" className="masthead">
            <ul className="cb-slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
                <li><span>Image 04</span></li>
                <li><span>Image 05</span></li>
                <li className="header-container particle-network-animation">
                    <div className="header-title vertical-align horizontal-align">
                        <div className="header-title-value">Kévin Andres</div>
                        <div className="header-title-info">Software Engineer & Game Enthusiast</div>
                    </div>
                </li>
            </ul>
            <CParticles />
        </header>
    );
}

export default Header;


