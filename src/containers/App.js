import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Content from '../components/Content'
// import * as Actions from '../actions'

class App extends Component {
  render() {
    // const { actions } = this.props
    return (
      <div>
        <Content />
      </div>
    )
  }
}

App.propTypes = {
}

// function mapStateToProps(state) {
//   return {
//     key: state.YYY
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
export default App
