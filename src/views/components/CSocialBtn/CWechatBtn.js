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

class CWechatBtn extends Component {
    render() {
        return (
            <CPopInfo className="d-contents popover-social" id="wechatQR" popClass="popover-social" body={<img src={PersonalImg.wechatQR} width={300} alt="error with wechat QR code."/>}>
                <div className={"btn btn-lg btn-social-icon" + (this.props.btn ? "  btn-weixin " : "") + (this.props.hvr ? " hvr-float-shadow " : "") + this.props.classNames}>
                    <FontAwesomeIcon icon={['fab', "weixin"]}/>
                </div>
            </CPopInfo>
        );
    }
}

CWechatBtn.propTypes = propTypes;
CWechatBtn.defaultProps = defaultProps;

export default CWechatBtn;