import React, {Component} from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

const propTypes = {
    id: PropTypes.string,
    target: PropTypes.string.isRequired
};

const defaultProps = {
};
class CArrowDown extends Component {
    render() {
        return (
            <AnchorLink href={"#" + this.props.target} id={this.props.id}>
                <div className="drop-arrow">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </AnchorLink>
        );
    }
}

CArrowDown.propTypes = propTypes;
CArrowDown.defaultProps = defaultProps;

export default CArrowDown;