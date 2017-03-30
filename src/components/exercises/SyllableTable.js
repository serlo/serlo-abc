import React from 'react';
import { addIndex, map } from 'ramda';
import { View, Text } from 'react-native';
import withAudio from '../helpers/withAudio';
import { RoundTextButton, RoundText } from '../../components/Components';

const mapIndex = addIndex(map);

const UnwrappedSyllableTable = ({ syllables, sounds: [sound], index }) => {
  const play = () => {
    sound.playAsync();
    sound.setPlaybackFinishedCallback(() => {
      sound.setPositionAsync(0);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00B4D5',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          marginTop: 50
        }}
      >
        {mapIndex(
          (syllable, key) => {
            if (key === index) {
              return (
                <RoundTextButton
                  style={{ margin: 5 }}
                  text={syllable}
                  size={60}
                  onPress={play}
                  key={key}
                />
              );
            } else {
              return (
                <RoundText
                  style={{ margin: 5 }}
                  text={syllable}
                  size={60}
                  key={key}
                />
              );
            }
          },
          syllables
        )}
      </View>
    </View>
  );
};

const WrappedSyllableTable = withAudio(UnwrappedSyllableTable);

const SyllableTable = ({ sound, ...props }) => {
  return <WrappedSyllableTable sounds={[sound]} {...props} />;
};

export default SyllableTable;
