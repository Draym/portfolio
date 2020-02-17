import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import $ from 'jquery';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleVisible: window.pageYOffset < 800,
            navClass: window.pageYOffset > 800 ? "navbar-shrink navbar-opaque" : "navbar-filmy",
            navBodyClass: window.pageYOffset > 800 ? "navbar-item-shorten" : "navbar-item-grow"
        };
        this.handleScroll = this.handleScroll.bind(this);
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

    render() {
        return (
            <nav className={"navbar fixed-top navbar-toggleable-md navbar-light " + this.state.navClass} id="mainNav">
                <div className="container">
                    <AnchorLink className={"navbar-brand cssanimation" + (this.state.titleVisible ? " disabled" : "")}
                                href="#page-top" id="navTitle">
                        KEVIN ANDRES
                    </AnchorLink>
                    <Scrollspy items={['header', 'profile', 'experience', 'projects', 'contact']}
                               currentClassName="active" offset={-30}
                               className={"navbar-nav ml-auto " + this.state.navBodyClass} id="navbar-body">
                        <li className="nav-item">
                        </li>
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

