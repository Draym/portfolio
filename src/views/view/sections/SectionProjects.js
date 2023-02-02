import React, {Component} from "react";
import Projects from "../../../data/DProjects";
import CGridImage from "../../components/CGridImg/CGridImage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SectionProjects extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let win = window.open(this.props.item.link, '_blank');
        win.focus();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="page-title section-title">Personal Projects
                    </h1>
                </div>
                <div className="container mb-5">
                    <CGridImage filters={["blockchain", "game", "web", "tool"]} images={Projects} rowHeight={370} margin={2} maxItems={3}/>
                </div>
                <div className="container mb-5">
                    <span className="h-align">see more on my&nbsp;<a href="https://github.com/Draym" target="github.com/Draym">Github<FontAwesomeIcon className="ml-1" icon={['fab', "github"]}/></a></span>
                </div>
            </div>
        );
    }
}

export default SectionProjects;


