import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CTreeLine from "../../components/CTreeLine";
import Enterprises from "../../../data/DEnterprises";
import Education from "../../../data/DEducation";

class SectionExperiences extends Component {
    render() {
        return (
            <div>
                <div className="container mb-5" id="experience">
                    <h1 className="page-title section-title"><FontAwesomeIcon icon="globe-europe" transform="left-2"/> Enterprise</h1>
                    <CTreeLine data={Enterprises}/>
                </div>
                <div className="container mb-5" id="diploma">
                    <h1 className="page-title section-title"><FontAwesomeIcon icon="graduation-cap" transform="left-2"/> Education</h1>
                    <CTreeLine data={Education}/>
                </div>
            </div>
        );
    }
}

export default SectionExperiences;


