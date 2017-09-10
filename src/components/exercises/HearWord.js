import React, { Component } from 'react';
import { View } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';

import { PRIMARY } from '../../styles/colors';
import { RoundButton, RoundTextButton } from '../Components';
import { loadSound, play } from '../helpers/audio';

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

export default loadSound(HearWord);
