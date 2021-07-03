import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

const propTypes = {
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hvr: PropTypes.bool,
    btn: PropTypes.bool,
    classNames: PropTypes.string
};

const defaultProps = {
    hvr: false,
    classNames: "",
    btn: false
};

class CFileBtn extends Component {
    render() {
        return (
            <a className={"btn btn-lg btn-social-icon" + (this.props.btn ? "  btn-file " : "") + (this.props.hvr ? " hvr-float-shadow " : "") + this.props.classNames}
               href={this.props.target} download={this.props.title}>
                <FontAwesomeIcon icon={['fas', "file-pdf"]}/>
            </a>
        );
    }
}

CFileBtn.propTypes = propTypes;
CFileBtn.defaultProps = defaultProps;

export default CFileBtn;