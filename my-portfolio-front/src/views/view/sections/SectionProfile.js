import React, {Component} from "react";
import {PersonalImg} from "../../../assets/img/images";

class SectionProfile extends Component {
    render() {
        return (
            <div>
                <div className="container mb-5">
                    <div>
                        <img className="profile-pic" src={PersonalImg.self2} alt="profile"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionProfile;


