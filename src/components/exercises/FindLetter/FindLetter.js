import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { playAll } from '../../../helpers/audio';
import {
  BLACK_TRANSPARENT,
  PRIMARY_WEAK,
  PRIMARY_STRONG
} from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import WordImageWithSounds from '../../common/WordImageWithSounds';

const mapIndexed = addIndex(map);

const styles = {
  letter: {
    backgroundColor: PRIMARY_STRONG,
    padding: 5,
    margin: 2,
    borderRadius: 20,
    elevation: 10,
    shadowColor: BLACK_TRANSPARENT,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4
    }
  },
  highlighted: {
    backgroundColor: PRIMARY_WEAK
  }
};

class FindLetter extends Component {
  play = () => playAll(this.props.sounds);

  toggleLetter = key => () => {
    this.props.setState(state => {
      state[key] = !state[key];

      return state;
    });
  };

  render() {
    const letters = mapIndexed(
      (char, key) => (
        <TouchableOpacity
          key={key}
          onPress={this.toggleLetter(key)}
          style={[
            styles.letter,
            this.props.state[key] ? styles.highlighted : null
          ]}
        >
          <Text style={DEFAULT}>{char}</Text>
        </TouchableOpacity>
      ),
      this.props.word.toString()
    );

    return (
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
    );
  }
}

export default FindLetter;
