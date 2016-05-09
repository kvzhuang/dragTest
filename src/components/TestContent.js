import React, {Component, PropTypes} from 'react';
import * as Actions from '../actions'

class Content extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Content: componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Content: componentDidUpdate')
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.number === this.props.number) {
      return false
    }
    return true
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({number: nextProps.number})
  // }
  render() {

    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}

export default Content;
