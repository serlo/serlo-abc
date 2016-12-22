import React from 'react'
import { Provider, connect } from 'react-redux'

import createStore from '../store'
import { getTemplate } from '../templates/Template'
import { selectView } from '../reducers'

class Container extends React.Component {
  render() {
    console.log( this.props.view )
    let T = getTemplate( this.props.view.template )
    return <T {...this.props.view}/>
  }
}

const mapStateToProps = (state) => ({
  view: selectView(state)
})

const mapDispatchToProps = { }
export const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container)

const store = createStore()
export default () => (
  <Provider store={store}>
    <ConnectedContainer />
  </Provider>
)
