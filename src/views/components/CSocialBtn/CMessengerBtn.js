import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import CPopInfo from "../CPopup/CPopInfo";
import {PersonalImg} from "../../../assets/img/images";

const propTypes = {
    hvr: PropTypes.bool,
    btn: PropTypes.bool,
    classNames: PropTypes.string
};

const defaultProps = {
    hvr: false,
    classNames: "",
    btn: false
};

class CMessengerBtn extends Component {
    render() {
        return (
            <CPopInfo className="d-contents popover-social" id="messengerQR" popClass="popover-social"
                      body={<img src={PersonalImg.messengerQR} width={300} alt="error with messenger QR code."/>}>
                <div className={"btn btn-lg btn-social-icon" + (this.props.btn ? "  btn-messenger " : "") + (this.props.hvr ? " hvr-float-shadow " : "") + this.props.classNames}>
                    <FontAwesomeIcon icon={['fab', "facebook-messenger"]}/>
                </div>
            </CPopInfo>
        );
    }
}

CMessengerBtn.propTypes = propTypes;
CMessengerBtn.defaultProps = defaultProps;

export default CMessengerBtn;