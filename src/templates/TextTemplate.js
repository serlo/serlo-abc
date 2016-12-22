import React from 'react'
import { Text, View } from 'react-native'

import { Navigation } from '../components/NavigationComponent'

const TextView = ({ id, tutorial, text }) => (
  <View style={{ flex: 1 }}>
    <Navigation curViewId={id} tutorialId={tutorial} />
    <View
      style={{
        flex: 12,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
      }}
    >
      <Text>{text}</Text>
    </View>
  </View>
)

export const TextTemplate = TextView
