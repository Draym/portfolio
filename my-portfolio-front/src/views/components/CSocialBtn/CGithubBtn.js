import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

const propTypes = {
    target: PropTypes.string,
    hvr: PropTypes.bool,
    btn: PropTypes.bool,
    classNames: PropTypes.string
};

const defaultProps = {
    hvr: false,
    classNames: "",
    btn: false
};

class CGithubBtn extends Component {
    render() {
        return (
            <a className={"btn btn-lg btn-social-icon" + (this.props.btn ? "  btn-github " : "") + (this.props.hvr ? " hvr-float-shadow " : "") + this.props.classNames}
               target="_blank"
               rel="noopener noreferrer"
               href={this.props.target}>
                <FontAwesomeIcon icon={['fab', "github"]}/>
            </a>
        );
    }
}

CGithubBtn.propTypes = propTypes;
CGithubBtn.defaultProps = defaultProps;

export default CGithubBtn;