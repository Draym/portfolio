import React from 'react';
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import CPopup from "./CPopup";
import PropTypes from 'prop-types';


const propTypes = {
    // mandatory
    id: PropTypes.string,
    // style
    popClass: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.any
};

const defaultProps = {};

class CPopInfo extends CPopup {
    render() {
        return (
            <div className={this.props.className}
                 ref={node => {
                     this.state.parentNode = node;
                 }}>
                <button className="btn pop-btn pop-info" id={this.props.id}>{this.props.children ? this.props.children :
                    <i className="icon-info"/>}</button>
                <Popover className={this.props.popClass} placement={this.props.position} isOpen={this.state.popoverOpen} target={this.props.id}
                         toggle={this.handleClick}>
                    {this.props.title && <PopoverHeader>{this.props.title}</PopoverHeader>}
                    {this.props.body && <PopoverBody>{this.props.body}</PopoverBody>}
                </Popover>
            </div>
        );
    }
}

CPopInfo.defaultProps = defaultProps;
CPopInfo.propTypes = propTypes;

export default CPopInfo;
