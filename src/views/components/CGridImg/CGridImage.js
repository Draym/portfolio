import React, {Component} from 'react';
import './CGridImage.scss';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import TArray from "../../../utils/TArray";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const propTypes = {
    rowImgs: PropTypes.number,
    rowHeight: PropTypes.number,
    imgMargin: PropTypes.number,
    images: PropTypes.array.isRequired,
    filterKey: PropTypes.string,
    filters: PropTypes.array
};

const defaultProps = {
    rowImgs: 3,
    rowHeight: 300,
    imgMargin: 2,
    images: [],
    filterKey: "tags",
    filters: null,
};

class CGridImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "*"
        };
        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(filter) {
        this.setState({filter: filter});
    }

    render() {
        const {images, rowImgs, rowHeight, imgMargin, filterKey, filters} = this.props;

        let drawTargetIcon = function(target) {
            if (target === "github") {
                return <span>&nbsp;{target} <FontAwesomeIcon icon={['fab', "github"]}/> </span>
            } else if (target.indexOf("website") >= 0) {
                return <span>&nbsp;{target} <FontAwesomeIcon icon={"globe"}/> </span>
            } else {
                return <span>&nbsp;{target}</span>
            }
        };

        return (
            <div>
                {filters != null && filters.length > 1 ?
                    <Row>
                        <Col xs={12}>
                            <ul className="filter-button-group filter-nav col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <li className="filter-button" onClick={() => this.setFilter("*")}>All</li>
                                {
                                    filters.map((filter, i) => {
                                        return [
                                            <li key={"delim" + i} className="filter-separator">/</li>,
                                            <li key={"filter" + i} className="filter-button"
                                                onClick={() => this.setFilter(filter)}>{filter}</li>
                                        ];
                                    })
                                }
                            </ul>
                        </Col>
                    </Row> : null}
                <Row>
                    <div className="grid_imgs h-align">
                        {images.map((image, i) => {
                                if (this.state.filter !== "*" && !TArray.contains(image[filterKey], this.state.filter)) {
                                    console.log("return null", this.state.filter)
                                    return null;
                                }
                                return (
                                    <div key={i} className="grid_container"
                                         style={{maxWidth: (100 / rowImgs) + "%", margin: imgMargin + "px"}}>
                                        <div className="grid_img">
                                            <a className="overlay-effect text-hide" target="_blank" rel="noopener noreferrer" href={image.link}>logo</a>
                                            <img src={image.src} alt="" style={{maxHeight: rowHeight + "px"}}/>
                                        </div>
                                        <div className="grid_details">
                                            <Row className="grid_img_title"><Col>{image.title}</Col></Row>
                                            <Row className="grid_img_desc"><Col>{image.desc}</Col></Row>
                                            <Row className="grid_img_links">
                                                <Col className="h-align">
                                                    click to see on {drawTargetIcon(image.target)}
                                                </Col>
                                            </Row>
                                            <Row className="grid_img_tag"><Col>
                                                {image.tags.map((tag, i) =>
                                                    <span key={i}>&nbsp;{i !== 0 ? '|' : null}&nbsp;&nbsp;{tag}</span>)}
                                            </Col></Row>
                                        </div>
                                    </div>);
                            }
                        )}
                    </div>
                </Row>
            </div>
        );
    }
}

CGridImage.defaultProps = defaultProps;
CGridImage.propTypes = propTypes;

export default CGridImage;
