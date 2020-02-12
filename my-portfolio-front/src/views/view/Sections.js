import React, {Component} from 'react';

class Sections extends Component {
    render() {
        return (
            <div>
                <section id="projects">
                    <div className="container">
                        <h1 className="page-title section-title">My<span
                            className="section-name">Projects</span></h1>
                        <div className="row">
                            <ul className="filter-button-group filter-nav col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <li className="filter-button" data-filter="*">All</li>
                                <li className="filter-separator">/</li>
                                <li className="filter-button" data-filter=".game">Video Games</li>
                                <li className="filter-separator">/</li>
                                <li className="filter-button" data-filter=".web">Web</li>
                                <li className="filter-separator">/</li>
                                <li className="filter-button" data-filter=".tool">Tools</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container" style={{width: "90%"}}>
                        <div className="grid">
                            <div className="grid-sizer"/>
                            <div className="grid-item-2 filter game">
                                <div className="portfolio-link">
                                    <div className="img-container">
                                        <img className="img-fluid hvr-grow-rotate" src="../../assets/img/portfolio/dba0.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item filter game">
                                <div className="portfolio-link">
                                    <div className="img-container">
                                        <img className="img-fluid hvr-grow-rotate" src="../../assets/img/portfolio/jjp0.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item filter game">
                                <div className="portfolio-link">
                                    <div className="img-container">
                                        <img className="img-fluid hvr-grow-rotate" src="../../assets/img/portfolio/spd0.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item filter web">
                                <div className="portfolio-link">
                                    <div className="img-container">
                                        <img className="img-fluid hvr-grow-rotate" src="../../assets/img/portfolio/swm0.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item-2 filter game">
                                <div className="portfolio-link">
                                    <div className="img-container">
                                        <img className="img-fluid hvr-grow-rotate" src="../../assets/img/portfolio/gomoku0.png"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item filter web">
                                <div className="portfolio-link">
                                    <div className="img-container">
                                        <img className="img-fluid hvr-grow-rotate" src="../../assets/img/portfolio/jweb0.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="success background1" id="about">
                    <div className="container">
                        <h1 className="page-title section-title text-white">About<span
                            className="section-name">Me</span>
                        </h1>
                        <div className="row">
                            <div className="col-lg-4 offset-lg-2">
                                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download
                                    includes the complete
                                    source files including HTML, CSS, and JavaScript as well as optional LESS
                                    stylesheets for easy
                                    customization.</p>
                            </div>
                            <div className="col-lg-4">
                                <p>Whether you're a student looking to showcase your work, a professional looking to
                                    attract clients, or
                                    a graphic artist looking to share your projects, this template is the perfect
                                    starting point!</p>
                            </div>
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <a href="#" className="btn btn-lg btn-outline">
                                    <i className="fa fa-download"/> Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="success background1" id="about3">
                    <div className="container">
                        <h1 className="page-title section-title text-white">About<span
                            className="section-name">Me</span>
                        </h1>
                        <div className="row">
                            <div className="col-lg-4 offset-lg-2">
                                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download
                                    includes the complete
                                    source files including HTML, CSS, and JavaScript as well as optional LESS
                                    stylesheets for easy
                                    customization.</p>
                            </div>
                            <div className="col-lg-4">
                                <p>Whether you're a student looking to showcase your work, a professional looking to
                                    attract clients, or
                                    a graphic artist looking to share your projects, this template is the perfect
                                    starting point!</p>
                            </div>
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <a href="#" className="btn btn-lg btn-outline">
                                    <i className="fa fa-download"/> Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="success background1" id="abou2t">
                    <div className="container">
                        <h1 className="page-title section-title text-white">About<span
                            className="section-name">Me</span>
                        </h1>
                        <div className="row">
                            <div className="col-lg-4 offset-lg-2">
                                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download
                                    includes the complete
                                    source files including HTML, CSS, and JavaScript as well as optional LESS
                                    stylesheets for easy
                                    customization.</p>
                            </div>
                            <div className="col-lg-4">
                                <p>Whether you're a student looking to showcase your work, a professional looking to
                                    attract clients, or
                                    a graphic artist looking to share your projects, this template is the perfect
                                    starting point!</p>
                            </div>
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <a href="#" className="btn btn-lg btn-outline">
                                    <i className="fa fa-download"/> Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Sections;
