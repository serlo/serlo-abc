import { AppLoading } from 'expo';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import { dropLast } from 'ramda';
import * as React from 'react';
import { TouchableOpacityProperties } from 'react-native';

import loadSound from '../../assets/sounds';
// @ts-ignore: transform to TypeScript
import { play, playAll } from '../../helpers/audio';
import { ReactRenderReturn } from '../../types';
// @ts-ignore: transform to TypeScript
import { LoadSounds } from './Audio';

interface PlaySoundsProps {
  delay?: number;
  sounds: Audio.Sound[];
  record?: boolean;
  playInitially?: boolean;
  recordingDuration?: number;
  onPlayEnd?: () => void;
  render: (
    buttonProps: TouchableOpacityProperties,
    isRecording: boolean
  ) => ReactRenderReturn;
}

interface PlaySoundsInnerProps extends PlaySoundsProps {
  delay?: number;
  sounds: Audio.Sound[];
}

interface PlaySoundsInnerState {
  isRecording: boolean;
}

class PlaySoundsInner extends React.Component<
  PlaySoundsInnerProps,
  PlaySoundsInnerState
> {
  public state: PlaySoundsInnerState = { isRecording: false };

  public componentDidMount() {
    if (this.props.playInitially) {
      this.playSoundsAndRecord();
    }
  }

  public render() {
    return this.props.render(
      { onPress: this.playSoundsAndRecord },
      this.state.isRecording
    );
  }

  private playSoundsAndRecord = () => {
    /* tslint:disable-next-line:no-empty */
    const onPlayEnd = this.props.onPlayEnd || (() => {});
    const { sounds, delay } = this.props;

    if (this.props.record) {
      Permissions.askAsync(Permissions.AUDIO_RECORDING).then(() => {
        const recording = new Audio.Recording();

        playAll(this.props.sounds, this.props.delay)
          .then(() =>
            Audio.setAudioModeAsync({
              staysActiveInBackground: true,
              allowsRecordingIOS: true,
              interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
              playsInSilentModeIOS: true,
              interruptionModeAndroid:
                Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
              shouldDuckAndroid: true,
              playThroughEarpieceAndroid: false
            })
          )
          .then(() =>
            recording.prepareToRecordAsync(
              Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            )
          )
          .then(
            () =>
              new Promise(resolve => {
                this.setState({ isRecording: true }, resolve);
              })
          )
          .then(() => recording.startAsync())
          .then(
            () =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  recording
                    .stopAndUnloadAsync()
                    .then(resolve)
                    .catch(reject);
                }, this.props.recordingDuration || 3000);
              })
          )
          .then(
            () =>
              new Promise(resolve => {
                this.setState({ isRecording: false }, resolve);
              })
          )
          .then(() =>
            Audio.setAudioModeAsync({
              staysActiveInBackground: true,
              allowsRecordingIOS: false,
              interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
              playsInSilentModeIOS: true,
              shouldDuckAndroid: true,
              interruptionModeAndroid:
                Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
              playThroughEarpieceAndroid: false
            })
          )
          .then(() => recording.createNewLoadedSoundAsync())
          .then(({ sound }: { sound: Audio.Sound }) => {
            play(sound)
              .then(() => sound.unloadAsync())
              .then(() => playAll(dropLast(1, sounds), delay))
              .then(() => {
                onPlayEnd();
              });
          })
          /* tslint:disable-next-line:no-any */
          .catch((err: any) => {
            /* tslint:disable-next-line:no-console */
            console.warn(err);
            onPlayEnd();
          });
      });
    } else {
      playAll(this.props.sounds, this.props.delay)
        .then(() => onPlayEnd())
        .catch(() => onPlayEnd());
    }
  };
}

export const PlaySounds: React.SFC<PlaySoundsProps> = props => {
  const { record } = props;
  const sounds: Audio.Sound[] = record
    ? [...props.sounds, loadSound.repeat()]
    : props.sounds;

  return (
    <LoadSounds
      sounds={sounds}
      /* tslint:disable-next-line:no-shadowed-variable */
      render={(sounds: Audio.Sound[], done: boolean) => {
        if (done) {
          return <PlaySoundsInner {...props} sounds={sounds} />;
        }

        return <AppLoading />;
      }}
    />
  );
};
