import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { back, next } from '../actions'
import { selectLastExercise } from '../reducers'

const TextTutorialView = ({ id, explanation, lastExercise, back, next }) => {
  if (lastExercise) {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <Text onPress={back}>Zurück</Text>
        </View>
        <View style={{ flex: 12 }}>
          <Text>{explanation}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Text onPress={() => next(id)}>Next</Text>
      </View>
      <View style={{ flex: 12 }}>
        <Text>{explanation}</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state) => ({
  lastExercise: selectLastExercise(state)
})

const mapDispatchToProps = { back, next }

export const TextTutorialTemplate = connect(mapStateToProps, mapDispatchToProps)(TextTutorialView)
