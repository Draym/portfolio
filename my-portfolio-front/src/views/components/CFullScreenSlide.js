import React, {Component} from 'react';
import PropTypes from "prop-types";

const propTypes = {
    head: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    imgs: PropTypes.array.isRequired
};

const defaultProps = {
    imgs: []
};

class CFullScreenSlide extends Component {
    render() {
        return (
            <ul className={"cb-slideshow" + (this.props.imgs.length > 1 ? " animated" : "")}>
                {this.props.imgs.map((img, i) => {
                    return <li key={i} ><span style={{background: "url(" + img + ") no-repeat center center fixed"}}/>
                    </li>;
                })}
                <li className="header-container particle-network-animation">
                    <div className="header-title vertical-align">
                        {this.props.head && <div className="header-title-head"><p>{this.props.head}</p></div>}
                        {this.props.title && <div className="header-title-value"><p>{this.props.title}</p></div>}
                        {this.props.info && <div className="header-title-info"><p>{this.props.info}</p></div>}
                    </div>
                </li>
            </ul>
        );
    }
}

CFullScreenSlide.propTypes = propTypes;
CFullScreenSlide.defaultProps = defaultProps;

export default CFullScreenSlide;