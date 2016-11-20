import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'

export class TextTemplate extends Component {
  render() {
    return <View><Text>{this.props.text}</Text></View>
  }
}
