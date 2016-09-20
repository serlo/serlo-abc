import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { connect, Provider } from 'react-redux'

import { decrement, increment } from '../actions'
import { selectCounter } from '../reducers'
import createStore from '../store'

const store = createStore()

const App = ({ counter, decrement, increment }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit index.android.js
    </Text>
    <Text style={styles.instructions}>
      Double tap R on your keyboard to reload,{'\n'}
      Shake or press menu button for dev menu
    </Text>
    <Text style={styles.instructions}>
      Counter: {counter}{'\n'}
      <Text style={{ color: 'blue', fontSize: 20 }} onPress={decrement}> - </Text>
      <Text style={{ color: 'blue', fontSize: 20 }} onPress={increment}> + </Text>
    </Text>
  </View>
)

const mapStateToProps = (state) => ({
  counter: selectCounter(state)
})

const mapDispatchToProps = { decrement, increment }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)
