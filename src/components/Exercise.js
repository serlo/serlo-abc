import { addIndex, map, toUpper } from 'ramda'
import React from 'react'
import { View, Text } from 'react-native'
import Sound from 'react-native-sound'

import speakerImage from '../assets/images/speaker.png'

import { RoundImageWithButton } from '../components/Components'
import { getSoundWithLength } from '../components/Utils'

const mapIndexed = addIndex(map)

const hightlightStyle = {
  backgroundColor: 'rgba(255,255,255,0.42)',
  borderRadius: 20
}

const Exercise = ({ image, sound, text, letter }) => {
  const short = getSoundWithLength(sound, 'short')
  const long = getSoundWithLength(sound, 'long')

  const play = () => {
    short.play((success) => {
      if (success) {
        setTimeout(() => long.play(), 1000)
      }
    })
  }

  const letters = mapIndexed(
    (char, key) => (
      <View
          key={key}
          style={[
            { padding: 5 },
            (toUpper(char) === toUpper(letter)) ? hightlightStyle : null
          ]}
      >
        <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>{char}</Text>
      </View>
      ),
    text
  )

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#00B4D5',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <RoundImageWithButton
        image={image}
        imageSize={200}
        icon={speakerImage}
        buttonSize={40}
        onPress={play}
      />
      <View style={{ flexDirection: 'row' }}>
        {letters}
      </View>
    </View>
  )
}

export default Exercise
