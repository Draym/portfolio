import React, {Component} from "react";
import CPopInfo from "./CPopup/CPopInfo";
import {PersonalImg} from "../../assets/img/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CSocialBtn extends Component {

    render() {
        return (
            <div className="col-12 social-icon text-center" >
                <a className="btn btn-lg btn-social-icon btn-linkedin hvr-float-shadow" target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.linkedin.com/in/k-andres">
                    <FontAwesomeIcon icon={['fab', "linkedin-in"]}/>
                </a>
                <a className="btn btn-lg btn-social-icon btn-github hvr-float-shadow" target="_blank"
                   rel="noopener noreferrer"
                   href="https://github.com/Draym">
                    <FontAwesomeIcon icon={['fab', "github"]}/>
                </a>
                <CPopInfo className="d-contents popover-social" id="messengerQR" popClass="popover-social" body={<img src={PersonalImg.messengerQR} width={300} alt="error with messenger QR code."/>}>
                    <div className="btn btn-lg btn-social-icon btn-messenger hvr-float-shadow">
                        <FontAwesomeIcon icon={['fab', "facebook-messenger"]}/>
                    </div>
                </CPopInfo>
                <CPopInfo className="d-contents popover-social" id="wechatQR" popClass="popover-social" body={<img src={PersonalImg.wechatQR} width={300} alt="error with wechat QR code."/>}>
                    <div className="btn btn-lg btn-social-icon btn-weixin hvr-float-shadow">
                        <FontAwesomeIcon icon={['fab', "weixin"]}/>
                    </div>
                </CPopInfo>
            </div>
        );
    }
}

export default CSocialBtn;