import React from 'react'
import { Platform } from 'react-native'
import Sound from 'react-native-sound'

const path = (Platform.OS === 'ios') ? 'sounds/' : ''

export const getSound = (sound) => {
  const filePath = `${path}${sound}.mp3`
  return getSoundFile(filePath)
}

export const getSoundWithLength = (sound, length) => {
  const filePath = `${path}${sound}_${length}.mp3`
  return getSoundFile(filePath)
}

const getSoundFile = (filePath) => {
  return new Sound(filePath, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('failed to load the sound at ' + filePath, error)
    }
  })
}
