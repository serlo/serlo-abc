import React from 'react'
import { connect, Provider } from 'react-redux'

import createStore from '../store'
import { getTemplate } from '../templates/Template'

class Container extends React.Component {
  render() {
    return getTemplate( {template:"Text", text:"Serlo"} )
  }
}

const store = createStore()

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {}
const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container)

export default () => (
  <Provider store={store}>
    <ConnectedContainer />
  </Provider>
)
