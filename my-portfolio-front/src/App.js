import React, {Component} from 'react';
import './App.scss';
import Footer from "./views/view/Footer";
import Header from "./views/view/Header";
import Navbar from "./views/view/Navbar";
import Sections from "./views/view/Sections";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faEnvelopeOpenText, faSpinner, faGraduationCap, faGlobeEurope, faChevronDown, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger, faWeixin, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import AnchorLink from "react-anchor-link-smooth-scroll";

library.add(faEnvelope, faEnvelopeOpenText, faSpinner, faGraduationCap, faGlobeEurope, faChevronDown, faChevronUp, faFacebookMessenger, faBars, faWeixin, faComments, faGithub, faLinkedinIn);

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="App" id="page-top">
                <Navbar/>
                <Header id="header"/>
                <Sections/>
                <Footer/>
                <div className="scroll-top hidden-lg-up disabled" id={"btn-pageTop"}>
                    <AnchorLink className="btn btn-primary page-scroll" href="#page-top">
                        <i className="fa fa-chevron-up"/>
                    </AnchorLink>
                </div>
            </div>
        );
    }
}

export default App;
