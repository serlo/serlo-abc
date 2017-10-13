import React, { Component } from 'react';
import { View } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import { play } from '../../helpers/audio';
import { PRIMARY } from '../../styles/colors';
import { getImage, getSound } from '../../helpers/words';
import RoundImageWithButton from '../common/RoundImageWithButton';
import RoundTextButton from '../common/RoundTextButton';
import { LoadSound } from '../helpers/Audio';

class HasPhoneme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: null
    };
  }

  createPhonemeButton = (index, crossedOut) => {
    return (
      <RoundTextButton
        onPress={() => {
          this.setState({
            highlighted: index
          });
        }}
        highlighted={index === this.state.highlighted}
        text={this.props.phoneme.toUpperCase() + this.props.phoneme}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          },
          crossedOut && { borderWidth: 3 }
        ]}
        crossedOut={crossedOut}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: PRIMARY,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <RoundImageWithButton
          image={this.props.image}
          imageSize={150}
          icon={speakerImage}
          buttonSize={30}
          onPress={() => play(this.props.sound)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {this.createPhonemeButton(0, false)}
          {this.createPhonemeButton(1, true)}
        </View>
      </View>
    );
  }
}

const HasPhonemeWrapper = props => {
  const { word } = props;
  return (
    <LoadSound
      sound={getSound(word)}
      render={sound => (
        <HasPhoneme image={getImage(word)} sound={sound} {...props} />
      )}
    />
  );
};
export default HasPhonemeWrapper;
