import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';
import { addIndex, map } from 'ramda';
import { PRIMARY, GREEN } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { RoundTextButton } from '../Components';
import { Video } from 'expo';
import playIcon from '../../assets/images/play.png';

const replayIcon = playIcon;
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
  video: {
    width: '90%',
    height: '100%'
  },
  button: {
    position: 'absolute',
    padding: 15,
    width: 80,
    height: 80,
    borderRadius: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 9999
  },
  icon: {
    width: 50,
    height: 50
  },
  hidden: {
    width: 0,
    height: 0,
    padding: 0,
    overflow: 'hidden'
  },
  highlighted: {
    backgroundColor: GREEN
  }
};

class VideoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: null,
      isPaused: false,
      isFinished: false
    };
  }

  onEnd = () => {
    this.setState({
      isFinished: true
    });
  };

  playPause = () => {
    this.setState({
      isPaused: !this.state.isPaused
    });
    if (!this.state.isPaused) {
      this.setState({ isFinished: false });
    }
  };

  replay = () => {
    this.player.seek(0);
    this.setState({
      isPaused: false,
      isFinished: false
    });
  };

  selectAnswer = key => () => {
    this.setState(({ highlighted }) => {
      highlighted: highlighted === key ? null : key;

      return { highlighted };
    });
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
        <View style={styles.vidContainer}>
          <TouchableWithoutFeedback onPress={this.playPause}>
            <Video
              ref={ref => {
                this.player = ref;
              }}
              resizeMode={Video.RESIZE_MODE_CONTAIN}
              source={this.props.video}
              style={styles.video}
              paused={this.state.isPaused}
              onEnd={this.onEnd}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={[
              styles.button,
              !this.state.isPaused && !this.state.isFinished
                ? styles.hidden
                : null
            ]}
            onPress={this.state.isFinished ? this.replay : this.playPause}
          >
            <Image
              source={this.state.isFinished ? replayIcon : playIcon}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
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
                  onPress={this.selectAnswer(key)}
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
