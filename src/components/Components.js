import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

const styles = {
  buttonWithInset: {
    marginLeft: -50
  }
}

export const RoundImageWithBorder = ({ image, size }) => (
  <Image
    resizeMode="cover"
    source={image}
    style={{
      height: size,
      width: size,
      margin: 20,
      borderRadius: size / 2,
      borderColor: 'rgba(0, 0, 0, 0.05)'
    }}
  />
)

export const RoundButton = ({ icon, size, style, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <View
      style={{
        backgroundColor: '#73DBFF',
        borderRadius: 9999
      }}
    >
      <Image
        source={icon}
        style={{
          height: size,
          width: size,
          margin: 5
        }}
      />
    </View>
  </TouchableOpacity>
)

export const RoundImageWithButton = ({ image, imageSize, icon, buttonSize, onPress }) => (
  <View
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 9999999,
      flexDirection: 'row',
      alignItems: 'flex-end'
    }}
  >
    <RoundImageWithBorder
      image={image}
      size={imageSize}
    />
    <RoundButton
      icon={icon}
      size={buttonSize}
      onPress={onPress}
      style={styles.buttonWithInset}
    />
  </View>
)
