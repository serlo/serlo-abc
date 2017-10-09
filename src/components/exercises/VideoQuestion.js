import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { addIndex, map } from 'ramda';

import { PRIMARY, GREEN } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import RoundTextButton from '../common/RoundTextButton';
import Video from '../common/Video';

const mapIndexed = addIndex(map);

const styles = {
  answer: {
    margin: 5
  },
  vidContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highlighted: {
    backgroundColor: GREEN
  }
};

class VideoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: null
    };
  }

  changeAnswer = key => () => {
    this.setState(({ highlighted }) => ({
      highlighted: highlighted === key ? null : key
    }));
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
          backgroundColor: PRIMARY
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
            {mapIndexed(
              (item, key) => (
                <RoundTextButton
                  text={item}
                  style={[
                    styles.answer,
                    this.state.highlighted === key ? styles.highlighted : null
                  ]}
                  key={key}
                  onPress={this.changeAnswer(key)}
                />
              ),
              this.props.answers
            )}
          </View>
        </View>
      </View>
    );
  }
}
export default VideoQuestion;
