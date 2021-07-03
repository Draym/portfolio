import React, {Component} from "react";
import {PersonalImg} from "../../../assets/img/images";
import CArrowDown from "../../components/CArrowDown";
import CSocialBtn from "../../components/CSocialBtn/CSocialBtn";
import AnchorLink from "react-anchor-link-smooth-scroll";

class SectionProfile extends Component {
    render() {
        return (
            <div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-md-3 profile-pic">
                            <div className="row">
                                <div className="col-7 col-md-12">
                                    <img src={PersonalImg.self} alt="profile"/>
                                </div>
                                <div className="col-5 col-md-12">
                                    <CSocialBtn/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 profile-content">
                            <p className="p-title">Hi! I'm Kevin</p>
                            <p>A French Software engineer with 4+ years of enterprise experience in full-stack development, mainly using Java/NodeJs
                                and ReactJs while participating in the complete product development lifecycle within Agile teams. Specializing
                                in backend development and micro-services architecture on cloud services.</p>
                            <p className="mb-1">MAnimated by well-designed code and discovering new business problematics; motivated by novelty and tackle
                                technical & design challenges. Passionate in User problematics, AI Robotics, Finance, Energy, Data and more.</p>
                            <p>I'm currently loving and focused on Kotlin and ReactJs. Soon to come Go.</p>
                            <p className="pt-3">Feel free to <AnchorLink href="#contact">contact me</AnchorLink> for opportunities.</p>
                        </div>
                    </div>
                </div>
                <CArrowDown target="profile" id="drop-profile"/>
            </div>
        );
    }
}

export default SectionProfile;


