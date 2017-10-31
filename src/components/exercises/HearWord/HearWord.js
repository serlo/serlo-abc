import React, { Component } from 'react';
import { View } from 'react-native';
import RoundTextButton from '../../common/RoundTextButton';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import { getWord } from '../../../helpers/words';

class HearWord extends Component {
  styles = {
    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    subView: {
      height: '50%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textButton: {
      margin: 5,
      borderRadius: 7,
      padding: 5
    }
  };

  createWordButton = (word, index) => {
    return (
      <RoundTextButton
        onPress={() => {
          this.props.setState(index);
        }}
        highlighted={index === this.props.state}
        text={getWord(word)}
        style={this.styles.textButton}
        key={index}
      />
    );
  };

  render() {
    return (
      <View style={this.styles.mainView}>
        <View style={[this.styles.subView, { height: '35%' }]}>
          <WordImageWithSounds
            word={this.props.words[this.props.correctIndex]}
          />
        </View>
        <View style={this.styles.subView}>
          {this.props.words.map(this.createWordButton)}
        </View>
      </View>
    );
  }
}

export default HearWord;