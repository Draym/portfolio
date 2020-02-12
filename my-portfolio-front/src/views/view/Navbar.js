import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleVisible: window.pageYOffset < 800,
            navClass: window.pageYOffset > 800 ? "navbar-shrink navbar-opaque" : "navbar-filmy",
            navBodyClass: window.pageYOffset > 800 ? "navbar-item-shorten" : "navbar-item-grow"
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
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
                    <Scrollspy items={['header','projects', 'about', 'contact']} currentClassName="active" offset={-50}
                               className={"navbar-nav ml-auto " + this.state.navBodyClass} id="navbar-body">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <AnchorLink offset='60' className="nav-link nav-title" href="#projects">
                                <span className="hvr-underline-from-center">Projects</span>
                            </AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink offset='60' className="nav-link nav-title" href="#about">
                                <span className="hvr-underline-from-center">About</span>
                            </AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink offset='60' className="nav-link nav-title" href="#contact">
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

