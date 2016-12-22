import React from 'react'
import { Component } from 'react'
import { AppRegistry, Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import { start } from '../actions'
import { lessons } from '../courses/CourseAbc'

class MenuView extends Component {
  render() {
    return <View>
      { lessons.map( (ex,index,array) => {
        return <TouchableHighlight key={index} onPress={ () => this.props.start(index) }>
          <Text>{index} - {ex.title}</Text>
          </TouchableHighlight>
      } ) }
    </View>
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = { start }
export const MenuTemplate = connect(mapStateToProps, mapDispatchToProps)(MenuView)
