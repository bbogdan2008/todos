import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlansList } from '../PlanAction';

class ConnectedList extends Component {

  componentDidMount() {
    this.props.loadPlansList();
  }

  render() {
    const { plans, isLoading, error } = this.props;

    return (
      <div>
        {isLoading && <p>Loading plans list ... </p>}
        {!isLoading && !error && 
            (
              plans.map(plan => (
                <li key={plan._id}>
                  {plan.text}
                </li>
              ))
            )
        }

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    plans: state.plans.list,
    isLoading: state.plans.isLoading,
    error: state.plans.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPlansList: () => dispatch(fetchPlansList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);