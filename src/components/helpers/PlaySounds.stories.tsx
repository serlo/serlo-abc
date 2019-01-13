// @ts-ignore: TODO: add declaration file
import { Ionicons } from '@expo/vector-icons';
import { action } from '@storybook/addon-actions';
// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Text } from 'react-native';

import loadSound from '../../assets/words/sounds';
import { RoundIconButton } from '../common/buttons';
import { GreenScreen, PrimaryScreen } from '../common/screens';
import { PlaySounds } from './PlaySounds';

storiesOf('helpers/PlaySounds', module)
  .add('record', () => {
    const children = (
      <PlaySounds
        record
        onPlayEnd={action('onPlayEnd')}
        sounds={[loadSound.ananas_short(), loadSound.ananas_long()]}
        render={(buttonProps, isRecording) => [
          <RoundIconButton
            key="button"
            {...buttonProps}
            IconComponent={Ionicons}
            name="md-volume-high"
            size={30}
          />,
          <Text key="text">{isRecording ? 'Recording' : 'Not recording'}</Text>
        ]}
      />
    );

    return [
      <GreenScreen key="green" children={children} />,
      <PrimaryScreen key="blue" children={children} />
    ];
  })
  .add('record and play initially', () => {
    const children = (
      <PlaySounds
        record
        playInitially
        onPlayEnd={action('onPlayEnd')}
        sounds={[loadSound.ananas_short(), loadSound.ananas_long()]}
        render={(buttonProps, isRecording) => [
          <RoundIconButton
            key="button"
            {...buttonProps}
            IconComponent={Ionicons}
            name="md-volume-high"
            size={30}
          />,
          <Text key="text">{isRecording ? 'Recording' : 'Not recording'}</Text>
        ]}
      />
    );

    return <PrimaryScreen key="blue" children={children} />;
  })
  .add('no record', () => {
    const children = (
      <PlaySounds
        onPlayEnd={action('onPlayEnd')}
        sounds={[loadSound.ananas_short(), loadSound.ananas_long()]}
        render={buttonProps => (
          <RoundIconButton
            {...buttonProps}
            IconComponent={Ionicons}
            name="md-volume-high"
            size={30}
          />
        )}
      />
    );

    return [
      <GreenScreen key="green" children={children} />,
      <PrimaryScreen key="blue" children={children} />
    ];
  });
