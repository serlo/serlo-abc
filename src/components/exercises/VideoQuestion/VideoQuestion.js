import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { addIndex, map } from 'ramda';

import { GREEN } from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import RoundTextButton from '../../common/RoundTextButton';
import Video from '../../common/Video';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

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
  changeAnswer = key => () => {
    this.props.setState(key);
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
              {mapIndexed(
                (item, key) => (
                  <RoundTextButton
                    text={item}
                    style={[
                      styles.answer,
                      this.props.state === key ? styles.highlighted : null
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
      </PortraitScreenOrientation>
    );
  }
}
export default VideoQuestion;
