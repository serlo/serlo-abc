import React from 'react'
import { View, Text } from 'react-native'

import speakerImage from '../assets/images/speaker.png'
import repeatIcon from '../assets/images/repeat.png'

import { RoundButton, IconWithBackground } from '../components/Components'
import { getSound } from '../components/Utils'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00B4D5',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  bigLetter: {
    paddingLeft: 50,
    height: 200,
    width: 200,
    color: '#FFF',
    fontSize: 180,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}

const ShowLetter = ({ letter, sound, isRepeat }) => {
  const soundFile = getSound(sound)
  const repeatSound = getSound('repeat')

  const play = () => {
    if (isRepeat) this.icon.unfocus()
    soundFile.play((success) => {
      if (success) {
        if (isRepeat) this.icon.focus()
        repeatSound.play()
      }
    })
  }

  const toggleRepeatButton = () => {
    if (isRepeat) {
      return (
        <IconWithBackground
          ref={(view) => { this.icon = view }}
          icon={repeatIcon}
          size={40}
        />
      )
    }

    /* Currently returning an empty view with the same height as IconWithBackground
       to keep the letter in the top half of the screen */
    // TODO: Find a better way than this
    return (
      <View height={80} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bigLetter}>
          {letter}
        </Text>
        <RoundButton
          icon={speakerImage}
          size={40}
          onPress={play}
        />
      </View>
      { toggleRepeatButton() }
    </View>
  )
}

export default ShowLetter
