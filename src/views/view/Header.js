import React from "react";
import CParticles from "../components/CParticles";
import CFullScreenSlide from "../components/CFullScreenSlide";
import {BackgroundImg} from "../../assets/img/images";

function Header() {
    /*
    ** V1
    return (
        <header id="header" className="masthead">
            <CFullScreenSlide head="Hey, I'm" title="Kevin Andres" info="Full-Stack Java Developer" imgs={[BackgroundImg.space, BackgroundImg.block3d, BackgroundImg.dbz, BackgroundImg.sky]}/>
            <CParticles/>
            <CArrowDown/>
        </header>
    );*/

    /* V2 */
    return (
        <header id="header" className="masthead2">
            <CFullScreenSlide title="Kevin Andres" info="Full-Stack Java Developer" imgs={[BackgroundImg.space]}/>
            <CParticles/>
        </header>
    );
}

export default Header;


