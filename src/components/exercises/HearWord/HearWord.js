import React, { Component } from 'react';
import { View } from 'react-native';
import RoundTextButton from '../../common/RoundTextButton';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

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
    const { showFeedback, feedback } = this.props;
    const wrong = showFeedback && feedback.highlightedChoice === index;
    return (
      <RoundTextButton
        onPress={() => {
          this.props.setState({ selectedIndex: index });
        }}
        wrong={wrong}
        highlighted={index === this.props.state.selectedIndex}
        text={word.toString()}
        style={this.styles.textButton}
        key={index}
      />
    );
  };

  render() {
    return (
      <PortraitScreenOrientation>
        <View style={this.styles.mainView}>
          <View style={[this.styles.subView, { height: '35%' }]}>
            <WordImageWithSounds
              playInitially={!this.props.state.soundsPlayed}
              word={this.props.words[this.props.correctIndex]}
              onPlayEnd={() => {
                this.props.setState({ soundsPlayed: true });
              }}
            />
          </View>
          <View style={this.styles.subView}>
            {this.props.words.map(this.createWordButton)}
          </View>
        </View>
      </PortraitScreenOrientation>
    );
  }
}

export default HearWord;
