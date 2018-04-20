import { addIndex, indexOf, map } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import { DEFAULT } from '../../styles/text';
import WordImageWithSounds from '../common/WordImageWithSounds';
import TextPicker from '../common/TextPicker';
import Video from '../common/Video';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';
const mapIndexed = addIndex(map);

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  vidContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export const MissingText = ({
  word,
  video,
  text,
  missing,
  options,
  ...props
}) => {
  const textParts = mapIndexed((part, key) => {
    const i = indexOf(key, missing);
    if (i !== -1) {
      return (
        <View key={key}>
          <TextPicker
            options={options[i]}
            showFeedback={props.showFeedback}
            feedback={props.feedback && props.feedback[i]}
            onChange={answer => {
              props.setState(
                mapIndexed(
                  (current, index) => (index === i ? answer : current),
                  props.state
                )
              );
            }}
            selectedValue={options[i][props.state[i]]}
          />
        </View>
      );
    }
    return (
      <View key={key} style={{ padding: 5 }}>
        <Text style={DEFAULT}>{part}</Text>
      </View>
    );
  }, text);

  const renderAssets = () => {
    if (word) {
      return <WordImageWithSounds word={word} longSound />;
    }

    if (video) {
      return (
        <View style={styles.vidContainer}>
          <Video video={video} />
        </View>
      );
    }
    return null;
  };

  return (
    <PortraitScreenOrientation>
      <View style={styles.container}>
        {renderAssets()}
        <View style={{ flexDirection: 'row', minHeight: 50 }}>{textParts}</View>
      </View>
    </PortraitScreenOrientation>
  );
};
