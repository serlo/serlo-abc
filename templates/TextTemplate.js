import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Navigation } from '../components/NavigationComponent'

class TextView extends Component {
  render() {
    return <View style={{flex: 1}}>
      <Navigation curViewId={this.props.id} tutorialId={this.props.tutorial} />
      <View style={{
        flex: 12,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
      }}>
        <Text>{this.props.text}</Text>
      </View>
    </View>
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { }
export const TextTemplate = connect(mapStateToProps, mapDispatchToProps)(TextView)
