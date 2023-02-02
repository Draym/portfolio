import React, {Component} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Badge from "react-bootstrap/Badge";

const propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    institute_logo: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    date_start: PropTypes.string.isRequired,
    date_end: PropTypes.string.isRequired,
    date_total: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    badges: PropTypes.array,
    details: PropTypes.object
};

const defaultProps = {};

class CTreeLineItem extends Component {
    constructor(props) {
        super(props);
        this.state = {focus: false};
        this.focusContent = this.focusContent.bind(this);
    }

    focusContent() {
        this.setState({focus: !this.state.focus});
    }

    render() {
        let drawFooter = function() {
            if (this.props.details || this.props.badges) {
                return (
                    <div className="tl-item-footer">
                        {this.props.details &&
                        <span className="tl-item-link">{this.state.focus ? "see less" : "see more"}</span>}
                        {this.props.badges && <div className="tl-item-labels">
                            {this.props.badges.map((badge, i) => {
                                return <Badge key={i} bg={badge.color}>{badge.name}</Badge>
                            })
                            }
                        </div>}
                    </div>
                );
            }
        }.bind(this);
        return (
            <div className="row mb-1" >
                <span className="anchor" id={this.props.id}/>
                <div className="offset-lg-2 offset-sm-1 col-lg-8 col-sm-10 tl-item">
                    <div className="tl-item-marker"/>
                    <div className={"tl-item-content" + (this.state.focus ? " active" : "")}
                         onClick={this.focusContent}>
                        <div className="tl-item-header">
                            <h3>{this.props.title}</h3>
                            <span style={{display: "flex"}}>
                                <img src={this.props.institute_logo} alt="logo"/>
                                <p><strong>{this.props.institute}</strong> <span
                                    className="delim-5">-</span> {this.props.city}, {this.props.country}
                                    <span className="tl-item-date">{this.props.date_start}<span
                                        className="delim-3">-</span>{this.props.date_end}</span>
                                </p>
                            </span>
                        </div>
                        <div className="tl-item-body">
                            <p className="tl-item-bhead">{this.props.intro}</p>
                            {this.state.focus && <p className="tl-item-bcontent">{this.props.details}</p>}
                        </div>
                        {drawFooter()}
                        {this.props.details && <FontAwesomeIcon icon={this.state.focus ? "chevron-up" : "chevron-down"}
                                                                className="tl-item-hover" size="lg"/>}
                    </div>
                </div>
            </div>
        )
    }
}


CTreeLineItem.defaultProps = defaultProps;
CTreeLineItem.propTypes = propTypes;
export default CTreeLineItem;