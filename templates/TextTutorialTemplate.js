import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { back } from '../actions'

class TextTutorialView extends Component {
  render() {
    return <View>
      <Text>{this.props.explanation}</Text>
      <Text onPress={this.props.back}>Zurück</Text>
    </View>
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { back }
export const TextTutorialTemplate = connect(mapStateToProps, mapDispatchToProps)(TextTutorialView)
