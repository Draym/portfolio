import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CTreeLine from "../../components/CTreeLine/CTreeLine";
import Education from "../../../data/DEducation";

class SectionExperiences extends Component {
    render() {
        return (
            <div className="container mb-5">
                <h1 className="page-title section-title"><
                    FontAwesomeIcon icon="graduation-cap" transform="left-2"/> Education</h1>
                <CTreeLine data={Education}/>
            </div>
        );
    }
}

export default SectionExperiences;


