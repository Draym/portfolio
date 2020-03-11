import React, {Component} from "react";
import Projects from "../../../data/DProjects";
import CGridImage from "../../components/CGridImg/CGridImage";

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
                    <CGridImage filters={["game", "web", "tool"]} images={Projects} rowHeight={370} margin={2} maxItems={3}/>
                </div>
            </div>
        );
    }
}

export default SectionProjects;


