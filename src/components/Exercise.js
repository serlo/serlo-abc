import { addIndex, map, toUpper } from 'ramda'
import React from 'react'
import { Image, View, Text, TouchableOpacity, Platform } from 'react-native'
import Sound from 'react-native-sound'

import speakerImage from '../assets/images/speaker.png'

const mapIndexed = addIndex(map)

const hightlightStyle = {
  backgroundColor: 'rgba(255,255,255,0.42)',
  borderRadius: 20
}

const path = Platform.OS === 'ios' ? 'sounds/' : ''

const Exercise = ({ image, sound, text, letter }) => {
  const short = new Sound(`${path}${sound}_short.mp3`, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('failed to load the sound', error)
    }
  })

  const long = new Sound(`${path}${sound}_long.mp3`, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('failed to load the sound', error)
    }
  })

  const play = () => {
    short.play((success) => {
      if (success) {
        setTimeout(() => long.play(), 1000)
      }
    })
  }


  const letters = mapIndexed(
    (c, key) => (
      <View
          key={key}
          style={[
            { padding: 5 },
            (toUpper(c) === toUpper(letter)) ? hightlightStyle : null
          ]}
      >
        <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>{c}</Text>
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
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          borderRadius: 9999999,
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}
      >
        <Image
          resizeMode="cover"
          source={image}
          style={{
            height: 200,
            width: 200,
            margin: 20,
            borderRadius: 100,
            borderColor: 'rgba(0, 0, 0, 0.05)'
          }}
        />
        <TouchableOpacity onPress={play} style={{
          marginLeft: -50
        }}>
          <View
            style={{
              backgroundColor: '#73DBFF',
              borderRadius: 99999,
            }}
          >
            <Image
              source={speakerImage}
              style={{
                height: 40,
                width: 40,
                margin: 5
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {letters}
      </View>
    </View>
  )
}

export default Exercise
