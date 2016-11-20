import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { next, tutorial } from '../actions'

class TextView extends Component {
  render() {
    return <View>
      <Text>{this.props.text}</Text>
      <Text onPress={this.props.next}>Next</Text>
      <Text onPress={this.props.tutorial}>Tutorial</Text>
    </View>
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = { next, tutorial}
export const TextTemplate = connect(mapStateToProps, mapDispatchToProps)(TextView)
