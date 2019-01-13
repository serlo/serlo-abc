import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RoundIconButton } from '../common/buttons';
import RoundImageWithBorder from '../common/RoundImageWithBorder';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';
import { FONT_FAMILY } from '../../styles/text';
import { PlaySounds } from '../helpers/PlaySounds';

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

export class MatchImage extends Component {
  createImageButton = index => {
    const { showFeedback, feedback } = this.props;
    const wrong = showFeedback && feedback.wrongChoice === index;
    const correct = showFeedback && feedback.correctChoice === index;

    return (
      <TouchableOpacity onPress={() => this.props.setState(index)}>
        <RoundImageWithBorder
          white
          correct={correct}
          wrong={wrong}
          highlighted={this.props.state === index}
          image={this.props.words[index].getImage()}
          size={100}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { correctIndex, words } = this.props;
    const word = words[correctIndex];

    return (
      <PortraitScreenOrientation>
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
            <Text style={[styles.bigLetter, FONT_FAMILY]}>
              {word.toString()}
            </Text>
            <PlaySounds
              playInitially
              sounds={[word.getSound()]}
              render={(buttonProps, isRecording) => {
                return (
                  <RoundIconButton
                    IconComponent={Ionicons}
                    name="md-volume-high"
                    size={20}
                    style={{ marginLeft: 10 }}
                    {...buttonProps}
                  />
                );
              }}
            />
          </View>
        </View>
      </PortraitScreenOrientation>
    );
  }
}
