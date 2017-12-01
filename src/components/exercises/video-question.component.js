import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { addIndex, map } from 'ramda';

import { PRIMARY_WEAK, WHITE } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import RoundTextButton from '../common/RoundTextButton';
import Video from '../common/Video';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const mapIndexed = addIndex(map);

const styles = {
  answer: {
    margin: 5,
    padding: 5
  },
  vidContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export class VideoQuestion extends Component {
  changeAnswer = key => () => {
    this.props.setState(key);
  };

  createChoiceButton = (item, key) => {
    const { showFeedback, feedback } = this.props;
    const wrong = showFeedback && feedback.highlightedChoice === key;
    const highlighted = this.props.state === key;

    return (
      <RoundTextButton
        text={item}
        wrong={wrong}
        style={[styles.answer, highlighted && { backgroundColor: WHITE }]}
        textStyle={highlighted && { color: wrong ? WHITE : PRIMARY_WEAK }}
        key={key}
        onPress={this.changeAnswer(key)}
      />
    );
  };

  render() {
    return (
      <PortraitScreenOrientation>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1
          }}
        >
          <Video video={this.props.video} aspectRatio={3 / 4} />
          <View
            style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={[DEFAULT, { marginBottom: 25 }]}>
              {this.props.question}
            </Text>
            <View>
              {mapIndexed(this.createChoiceButton, this.props.answers)}
            </View>
          </View>
        </View>
      </PortraitScreenOrientation>
    );
  }
}
