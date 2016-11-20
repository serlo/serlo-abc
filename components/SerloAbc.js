import React from 'react'
import { connect, Provider } from 'react-redux'
import { Text, View } from 'react-native'

import createStore from '../store'

class Container extends React.Component {
  render() {
    return <View>
      <Text>Serlo</Text>
    </View>
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
