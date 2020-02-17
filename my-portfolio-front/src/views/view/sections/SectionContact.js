import React, {Component} from "react";
import TString from "../../../utils/TString";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import HttpUtils from "../../../utils/api/HttpUtils";
import {ApiEndpoint} from "../../../utils/api/ApiEndpoint";
import Alert from "react-bootstrap/Alert";
import CPopInfo from "../../components/CPopup/CPopInfo";
import {PersonalImg} from "../../../assets/img/images";

class SectionContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            subject: null,
            message: null,
            error: false,
            formResult: null,
            loading: false,
            showAlert: false
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.messageIsInvalid = this.messageIsInvalid.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.setShowAlert = this.setShowAlert.bind(this);
    }

    onValueChange(key, event) {
        let update = {error: null};
        update[key] = event.target.value;
        this.setState(update);
    }

    messageIsInvalid() {
        return (TString.isNull(this.state.name) || TString.isNull(this.state.email) || TString.isNull(this.state.subject) || TString.isNull(this.state.message));
    }

    sendMessage(e) {
        e.preventDefault();
        if (this.messageIsInvalid()) {
            this.setState({
                error: "The form is invalid."
            });
            return;
        }
        this.setState({loading: true});
        let message = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };
        HttpUtils.POST(null, ApiEndpoint.MAILAPP_sendToAdmin, message, function (data) {
            this.setState({
                formResult: (!data ? ("Sorry " + this.state.name + ", it seems that my mail server is not responding. Please try again later!") : "Your message has been send."),
                error: !data,
                loading: false,
                showAlert: true
            });
        }.bind(this), function (errorStatus, error) {
            console.log(error);
            this.setState({
                error: true,
                formResult: "Sorry " + this.state.name + ", it seems that my mail server is not responding. Please try again later!",
                loading: false,
                showAlert: true
            });
        }.bind(this));
    }

    setShowAlert(value) {
        this.setState({showAlert: value});
    }

    render() {
        let disabled = this.messageIsInvalid();
        return (
            <div className="container">
                <h1 className="page-title section-title">Contact<span
                    className="section-name">Me</span>
                </h1>

                <div className="social-icon text-center" style={{"marginBottom": "50px"}}>

                    <a className="btn btn-lg btn-social-icon btn-linkedin hvr-float-shadow" target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.linkedin.com/in/k-andres">
                        <span className="fa fa-linkedin"/>
                    </a>
                    <a className="btn btn-lg btn-social-icon btn-github hvr-float-shadow" target="_blank"
                       rel="noopener noreferrer"
                       href="https://github.com/Draym">
                        <span className="fa fa-github"/>
                    </a>
                    <CPopInfo className="d-contents popover-social" id="messengerQR" title={"Profile ID: kevin.andres.904"} body={<img src={PersonalImg.messengerQR} width={250} alt="error with messenger QR code."/>}>
                        <div className="btn btn-lg btn-social-icon btn-messenger hvr-float-shadow">
                            <FontAwesomeIcon icon={['fab', "facebook-messenger"]}/>
                        </div>
                    </CPopInfo>
                    <CPopInfo className="d-contents popover-social" id="wechatQR" title={"Profile ID: kev_Dr3"} body={<img src={PersonalImg.wechatQR} width={250} alt="error with wechat QR code."/>}>
                        <div className="btn btn-lg btn-social-icon btn-weixin hvr-float-shadow">
                            <span className="fa fa-weixin"/>
                        </div>
                    </CPopInfo>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form name="sentMessage" id="contactForm">
                            <div className="control-group col-lg-12" style={{display: "inline-flex", padding: 0}}>
                                <div className="col-lg-4" style={{"paddingLeft": 0}}>
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input className="form-control" id="name" type="text" placeholder="Name"
                                               required onChange={(event) => this.onValueChange("name", event)}/>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input className="form-control" id="email" type="email"
                                               placeholder="Email Address" required
                                               onChange={(event) => this.onValueChange("email", event)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Subject</label>
                                    <input className="form-control" id="subject" type="tel" placeholder="Subject"
                                           required onChange={(event) => this.onValueChange("subject", event)}/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message"
                                              required onChange={(event) => this.onValueChange("message", event)}/>
                                </div>
                            </div>
                            <br/>
                            {this.state.formResult ?
                                <Alert variant={this.state.error ? "danger" : "success"}
                                       onClose={() => this.setShowAlert(false)} dismissible show={this.state.showAlert}>
                                    <strong>{this.state.formResult}</strong>
                                    {this.state.error ? <div>
                                        <br/>
                                        <span>You can contact me directly using <strong>kevin.andres@epitech.eu</strong></span>
                                    </div> : null}
                                </Alert> : null}
                            <div className="form-group">
                                {disabled ?
                                    <button
                                        className="btn btn-success btn-lg pull-right " disabled={true}>
                                        <FontAwesomeIcon icon="envelope-open-text" transform="left-3"/> Fill the form
                                    </button>
                                    :
                                    <button
                                        className="btn btn-success btn-lg pull-right hvr-shrink"
                                        onClick={this.sendMessage} disabled={this.state.loading}>
                                        <FontAwesomeIcon icon={this.state.loading ? "spinner" : "envelope"}
                                                         transform="left-3" spin={this.state.loading}/> Send
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionContact;


