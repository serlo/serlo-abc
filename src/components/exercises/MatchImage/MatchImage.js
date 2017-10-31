import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { play } from '../../../helpers/audio';
import RoundButton from '../../common/RoundButton';
import RoundImageWithBorder from '../../common/RoundImageWithBorder';
import { LoadSound } from '../../helpers/Audio';
import { getSound, getWord, getImage } from '../../../helpers/words';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row'
  },
  bigLetter: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  }
};

class MatchImage extends Component {
  createImageButton = index => (
    <TouchableOpacity onPress={() => this.props.setState(index)}>
      <RoundImageWithBorder
        white
        highlighted={this.props.state === index}
        image={getImage(this.props.words[index])}
        size={100}
      />
    </TouchableOpacity>
  );

  render() {
    const { sound } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            {this.createImageButton(0)}
            {this.createImageButton(1)}
          </View>
          <View style={styles.row}>
            {this.createImageButton(2)}
            {this.createImageButton(3)}
          </View>
        </View>
        <View style={[styles.row, { alignItems: 'flex-end' }]}>
          <Text style={styles.bigLetter}>{this.props.text}</Text>
          <RoundButton
            IconComponent={Ionicons}
            name="md-volume-up"
            size={20}
            onPress={() => play(sound)}
            style={{
              marginLeft: 10
            }}
          />
        </View>
      </View>
    );
  }
}

const MatchImageWrapper = props => {
  const { words, correctIndex } = props;
  return (
    <LoadSound
      sound={getSound(words[correctIndex])}
      render={sound => (
        <MatchImage
          text={getWord(words[correctIndex])}
          sound={sound}
          {...props}
        />
      )}
    />
  );
};

export default MatchImageWrapper;