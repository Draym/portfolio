import React, {Component} from "react";
import PropTypes from "prop-types";
import CTreeLineItem from "./CTreeLineItem";

const propTypes = {
    data: PropTypes.array
};

const defaultProps = {
    data: []
};

class CTreeLine extends Component {
    render() {
        return (
            <div className="row tree-line">
                <div className="col-12">
                    {
                        this.props.data.map((item, i) => {
                            return (
                                <CTreeLineItem key={i} title={item.title} institute={item.institute}
                                               institute_logo={item.institute_logo}
                                               city={item.city} country={item.country} date_start={item.date_start}
                                               date_end={item.date_end} date_total={item.date_total}
                                               intro={item.intro} badges={item.badges} details={item.details}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}


CTreeLine.defaultProps = defaultProps;
CTreeLine.propTypes = propTypes;
export default CTreeLine;