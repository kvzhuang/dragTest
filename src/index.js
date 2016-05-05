import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
// import configureStore from './store/configureStore'


render(<App />, document.getElementById('root'))

// if you have already set actions, reducers and store, then
//
// const store = configureStore()
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
