import React, {Component} from "react";
import Gallery from 'react-grid-gallery';
//import PropTypes from 'prop-types';
/*
const propTypes = {
    data: PropTypes.array,
    filters: PropTypes.array,
};
*/
const defaultProps = {
    data: [],
    filterKey: "type",
    filters: null,
};

class CGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: props.filters,
            filter: "*"
        };
        this.state.data = this.filterData(props.data, this.state.filter, props.filterKey);
        console.log("data:", this.state.data);
    }

    filterData(data, filter, filterKey) {
        if (filter === "*") {
            return data;
        }
        let result = [];
        for (let i in data) {
            if (data[i][filterKey] === filter) {
                result.push(data[i]);
            }
        }
        return result;
    }

    setFilter(filter) {
        this.setState({
            filter: filter,
            data: this.filterData(this.props.data, filter, this.props.filterKey)
        });
    }

    render() {
        const {data, filterKey, filters, ...gridProps} = this.props;
        return (
            <div>
                {this.state.filters != null && this.state.filters.length > 1 ?
                    <div className="row">
                        <div className="col-12">
                            <ul className="filter-button-group filter-nav col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <li className="filter-button" onClick={() => this.setFilter("*")}>All</li>
                                {
                                    this.state.filters.map((filter, i) => {
                                        return [
                                            <li key={"delim" + i} className="filter-separator">/</li>,
                                            <li key={"filter" + i} className="filter-button"
                                                onClick={() => this.setFilter(filter)}>{filter}</li>
                                        ];
                                    })
                                }
                            </ul>
                        </div>
                    </div> : null}
                <div className="row">
                    <div className="col-xs-12 offset-lg-1 col-lg-10">
                        <Gallery images={this.state.data} {...gridProps}/>
                    </div>
                </div>
            </div>
        );
    }
}

CGallery.defaultProps = defaultProps;
//CGallery.propTypes = propTypes;
export default CGallery;


