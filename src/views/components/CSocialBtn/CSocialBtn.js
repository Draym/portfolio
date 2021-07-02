import React, {Component} from "react";
import CLinkedinBtn from "./CLinkedinBtn";
import CGithubBtn from "./CGithubBtn";
import CMessengerBtn from "./CMessengerBtn";
import CWechatBtn from "./CWechatBtn";
import CFileBtn from "./CFileBtn";
import fileCV from "../../../assets/k-andres_cv.pdf";

class CSocialBtn extends Component {

    render() {
        return (
            <div className="col-12 social-icon text-center">
                <CLinkedinBtn target={"https://www.linkedin.com/in/k-andres"} btn hvr/>
                <CGithubBtn target={"https://github.com/Draym"} btn hvr/>
                <CFileBtn target={fileCV} title="KevinAndres_CV" btn hvr/>
                <CMessengerBtn btn hvr/>
                <CWechatBtn btn hvr/>
            </div>
        );
    }
}

export default CSocialBtn;