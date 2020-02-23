import React, {Component} from "react";
import PropTypes from "prop-types";
import CTreeLineItem from "./CTreeLineItem";

const propTypes = {
    data: PropTypes.array,
    max: PropTypes.number,
    maxMessage: PropTypes.string,
    maxMessageBtn: PropTypes.object
};

const defaultProps = {
    data: [],
    maxMessage: "There is more data to show, please click here to ",
    maxMessageBtn: {0: "show more", 1: "show less"}
};

class CTreeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: (props.max == null ? props.data.length : props.max),
            hasMax: (props.max != null),
            isActive: false
        };
        this.hiddenSectionOnClick = this.hiddenSectionOnClick.bind(this);
    }

    hiddenSectionOnClick() {
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        let createTreeItem = function (min, max, data) {
            return data.map((item, i) => {
                if (i < min || i >= max) {
                    return null;
                }
                return (
                    <CTreeLineItem key={i} title={item.title} institute={item.institute}
                                   institute_logo={item.institute_logo}
                                   city={item.city} country={item.country} date_start={item.date_start}
                                   date_end={item.date_end} date_total={item.date_total}
                                   intro={item.intro} badges={item.badges} details={item.details}/>
                );
            });
        };
        return (
            <div className="row">
                <div className="col-12">
                    {createTreeItem(0, this.state.max, this.props.data)}
                </div>
                {this.state.hasMax &&
                <div className="col-12">
                    <h4 className="tl-hidden-msg">{this.props.maxMessage}<span className="btn-link"
                                                                               onClick={this.hiddenSectionOnClick}>{this.props.maxMessageBtn[this.state.isActive ? 1 : 0]}</span>
                    </h4>
                </div>}
                {this.state.hasMax && <div className={"col-12 hidden-block " + (this.state.isActive ? "active" : "")}>
                    {createTreeItem(this.state.max, this.props.data.length, this.props.data)}
                </div>}
            </div>
        )
    }
}


CTreeLine.defaultProps = defaultProps;
CTreeLine.propTypes = propTypes;
export default CTreeLine;