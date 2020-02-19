import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import $ from 'jquery';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { HamburgerSqueeze } from 'react-animated-burgers'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleVisible: window.pageYOffset < 800,
            navClass: window.pageYOffset > 800 ? "navbar-shrink navbar-opaque" : "navbar-filmy",
            navBodyClass: window.pageYOffset > 800 ? "navbar-item-shorten" : "navbar-item-grow",
            mobileMenuActive: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset < 200) {
            $("#btn-pageTop").addClass("disabled");
        } else {
            $("#btn-pageTop").removeClass("disabled");
        }
        this.setState({
            titleVisible: window.pageYOffset < 800,
            navClass: window.pageYOffset > 800 ? "navbar-shrink navbar-opaque" : "navbar-filmy",
            navBodyClass: window.pageYOffset > 800 ? "navbar-item-shorten" : "navbar-item-grow"
        });
    };

    toggleMenu() {
        this.setState({mobileMenuActive: !this.state.mobileMenuActive});
    }

    render() {
        return (
            <nav className={"navbar fixed-top navbar-toggleable-md navbar-light row justify-content-start " + this.state.navClass}
                 id="mainNav">
                <div className={"navbar-mobile-toggle" + (this.state.mobileMenuActive ? " active":"")}>
                    <HamburgerSqueeze isActive={this.state.mobileMenuActive} toggleButton={this.toggleMenu} buttonColor="white" barColor="black" buttonWidth={20}/>
                </div>
                <div className="col-8 col-sm-5 col-md-4">
                    <AnchorLink
                        className={"navbar-brand cssanimation" + (this.state.titleVisible ? " disabled" : "")}
                        href="#page-top" id="navTitle">
                        KEVIN ANDRES
                    </AnchorLink>
                </div>
                <div className="col-12 col-sm-7 offset-md-1 col-md-7">
                    <Scrollspy items={['header', 'profile', 'experience', 'projects', 'contact']}
                               currentClassName="active" offset={-30}
                               className={"navbar-nav " + this.state.navBodyClass + (this.state.mobileMenuActive ? " mobileMenuActive" : "")} id="navbar-body">
                        <li className="nav-item"/>
                        <li className="nav-item">
                            <AnchorLink className="nav-link nav-title" href="#profile">
                                <span className="hvr-underline-from-center">Profile</span>
                            </AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link nav-title" href="#experience">
                                <span className="hvr-underline-from-center">C.V</span>
                            </AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link nav-title" href="#projects">
                                <span className="hvr-underline-from-center">Projects</span>
                            </AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link nav-title" href="#contact">
                                <span className="hvr-underline-from-center">Contact</span>
                            </AnchorLink>
                        </li>
                    </Scrollspy>
                </div>
            </nav>
        );
    }
}

export default Navbar;

