import { addIndex, map } from 'ramda';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';

import withAudio from '../helpers/withAudio';
import { RoundImageWithButton } from '../Components';
const mapIndexed = addIndex(map);

const styles = {
  letter: {
    padding: 5,
    margin: 2,
    borderRadius: 20,
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4
    }
  },
  highlighted: {
    backgroundColor: '#73DBFF'
  },
  normal: {
    backgroundColor: '#17BCDE'
  }
};

class FindLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: map(() => false, this.props.text)
    };
  }

  play = () => {
    const playAll = ([sound, ...rest]) => {
      sound.playAsync();
      sound.setPlaybackFinishedCallback(() => {
        sound.setPositionAsync(0);
        if (rest.length > 0) {
          setTimeout(() => playAll(rest), 1000);
        }
      });
    };
    playAll(this.props.sounds);
  };

  toggleLetter = key => {
    const highlighted = [...this.state.highlighted];
    highlighted[key] = !highlighted[key];
    this.setState({
      highlighted: highlighted
    });
  };

  render() {
    const letters = mapIndexed(
      (char, key) => (
        <TouchableOpacity
          key={key}
          onPress={() => this.toggleLetter(key)}
          style={[
            this.state.highlighted[key] ? styles.highlighted : styles.normal,
            styles.letter
          ]}
        >
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>
            {char}
          </Text>
        </TouchableOpacity>
      ),
      this.props.text
    );

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#00B4D5',
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
        <View style={{ flexDirection: 'row' }}>
          {letters}
        </View>
      </View>
    );
  }
}

export default withAudio(FindLetter);
