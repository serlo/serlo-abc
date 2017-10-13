import React, { Component } from 'react';
import { View } from 'react-native';
import speakerImage from '../../assets/images/speaker.png';
import { play } from '../../helpers/audio';
import { PRIMARY } from '../../styles/colors';
import RoundButton from '../common/RoundButton';
import RoundTextButton from '../common/RoundTextButton';
import { LoadSound } from '../helpers/Audio';
import { getSound, getWord } from '../../helpers/words';

class HearWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: null
    };
  }

  styles = {
    mainView: {
      flex: 1,
      backgroundColor: PRIMARY,
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
          this.setState({
            highlighted: index
          });
        }}
        highlighted={index === this.state.highlighted}
        text={word}
        style={this.styles.textButton}
        key={index}
      />
    );
  };

  render() {
    return (
      <View style={this.styles.mainView}>
        <View style={[this.styles.subView, { height: '35%' }]}>
          <RoundButton
            icon={speakerImage}
            size={60}
            onPress={() => play(this.props.sound)}
          />
        </View>
        <View style={this.styles.subView}>
          {this.props.words.map(this.createWordButton)}
        </View>
      </View>
    );
  }
}

const HearWordWrapper = props => {
  const { words, correctIndex } = props;
  return (
    <LoadSound
      sound={getSound(words[correctIndex])}
      render={sound => (
        <HearWord words={getWord(words)} sound={sound} {...props} />
      )}
    />
  );
};

export default HearWordWrapper;
