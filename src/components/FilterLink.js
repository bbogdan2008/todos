import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/index';

class FilterLink extends Component {

    render() {
        const {filter} = this.props;
        return (
            <a href="#"
                onClick={event => {
                    event.preventDefault();
                    this.props.setVisibilityFilter(filter);
                }}
            >
                {this.props.children}
            </a>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    }
}


export default connect(null, mapDispatchToProps)(FilterLink);