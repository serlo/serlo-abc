import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { playAll } from '../../../helpers/audio';
import {
  BLACK_TRANSPARENT,
  PRIMARY_WEAK,
  PRIMARY_STRONG,
  GREEN,
  RED
} from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

const mapIndexed = addIndex(map);

const styles = {
  letter: {
    backgroundColor: PRIMARY_STRONG,
    padding: 5,
    margin: 2,
    borderRadius: 20,
    borderWidth: 2,
    elevation: 10,
    shadowColor: BLACK_TRANSPARENT,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4
    }
  }
};

class FindLetter extends Component {
  letters = map(() => undefined, this.props.word.toString());

  play = () => playAll(this.props.sounds);

  toggleLetter = key => () => {
    this.props.setState(state => {
      state[key] = !state[key];

      return state;
    });
  };

  createLetterButton = (letter, i) => {
    const { showFeedback, feedback } = this.props;
    const highlighted = this.props.state[i];
    const wrong = showFeedback && feedback.wrongChoices[i];
    const correct = showFeedback && feedback.correctChoices[i];
    const missingCorrect = showFeedback && feedback.missingCorrectChoices[i];

    return (
      <TouchableOpacity
        ref={ref => (this.letters[i] = ref)}
        key={i}
        onPress={this.toggleLetter(i)}
        style={[
          styles.letter,
          highlighted && {
            backgroundColor: correct ? GREEN : PRIMARY_WEAK
          },
          wrong && {
            backgroundColor: RED
          },
          {
            borderColor: !highlighted && missingCorrect ? GREEN : 'transparent'
          }
        ]}
      >
        <Text style={DEFAULT}>{letter}</Text>
      </TouchableOpacity>
    );
  };

  getMeasuresAsync() {
    return Promise.all(
      map(
        letter =>
          new Promise(resolve => {
            letter.measureInWindow((x, y, width, height) => {
              resolve([x + width / 2, y + height / 2]);
            });
          }),
        this.letters
      )
    );
  }

  render() {
    const letters = mapIndexed(
      this.createLetterButton,
      this.props.word.toString()
    );

    return (
      <PortraitScreenOrientation>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <WordImageWithSounds playInitially word={this.props.word} longSound />
          <View style={{ flexDirection: 'row' }}>{letters}</View>
        </View>
      </PortraitScreenOrientation>
    );
  }
}

export default FindLetter;
