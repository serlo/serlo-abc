import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import { playAll } from '../../helpers/audio';
import { DEFAULT } from '../../styles/text';

import {
  BLACK_TRANSPARENT,
  PRIMARY,
  PRIMARY_WEAK,
  PRIMARY_STRONG
} from '../../styles/colors';
import { LoadSounds } from '../helpers/Audio';
import { RoundImageWithButton } from '../Components';
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
  constructor(props) {
    super(props);
    this.state = {
      highlighted: map(() => false, this.props.text)
    };
  }

  play = () => playAll(this.props.sounds);

  toggleLetter = key => () => {
    this.setState(({ highlighted }) => {
      highlighted[key] = !highlighted[key];

      return { highlighted };
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
            this.state.highlighted[key] ? styles.highlighted : null
          ]}
        >
          <Text style={DEFAULT}>{char}</Text>
        </TouchableOpacity>
      ),
      this.props.text
    );

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
          imageSize={200}
          icon={speakerImage}
          buttonSize={40}
          onPress={this.play}
        />
        <View style={{ flexDirection: 'row' }}>{letters}</View>
      </View>
    );
  }
}

const FindLetterWrapper = ({ sounds, ...props }) => (
  <LoadSounds
    sounds={sounds}
    render={sounds => <FindLetter sounds={sounds} {...props} />}
  />
);

export default FindLetterWrapper;
