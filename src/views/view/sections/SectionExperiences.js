import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CTreeLine from "../../components/CTreeLine/CTreeLine";
import Enterprises from "../../../data/DEnterprises";

class SectionExperiences extends Component {
    render() {
        return (
                <div className="container">
                    <h1 className="page-title section-title">
                        <FontAwesomeIcon icon="globe-europe" transform="left-2"/> Working Experience
                    </h1>
                    <CTreeLine data={Enterprises}  maxMessage="I have more relevant working experience, please click here to "/>
                </div>
        );
    }
}

export default SectionExperiences;


