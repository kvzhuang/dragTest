import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// actions
import * as Actions from '../actions';
// components
import TestContent from '../components/TestContent';


class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('APP: componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('APP: componentDidUpdate')
  }

  render() {

    return (
      <div>
        123
      </div>
    )
  }
}

const getNumber = (state) => state.number
const getNumberTransform = createSelector([getNumber], number => {
  return number
})
function mapStateToProps(state) {
  return {
    number: getNumberTransform(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
