import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { back, next } from '../actions'
import { selectLastExercise } from '../reducers'

class TextTutorialView extends Component {
  render() {
    if(this.props.lastExercise != undefined) {
      return <View style={{flex:1}}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Text onPress={this.props.back}>Zurück</Text>
        </View>
        <View style={{flex:12}}>
          <Text>{this.props.explanation}</Text>
        </View>
      </View>
    } else {
      return <View style={{flex:1}}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Text onPress={ () => this.props.next(this.props.id) }>Next</Text>
        </View>
        <View style={{flex:12}}>
          <Text>{this.props.explanation}</Text>
        </View>
      </View>
    }
  }
}


const mapStateToProps = (state) => ({
  lastExercise: selectLastExercise(state)
})

const mapDispatchToProps = { back, next }
export const TextTutorialTemplate = connect(mapStateToProps, mapDispatchToProps)(TextTutorialView)
