// @ts-ignore: add declaration file
import { Audio } from 'expo';
import * as React from 'react';
import { TouchableOpacityProperties } from 'react-native';

import loadSound from '../../assets/sounds';
// @ts-ignore: transform to TypeScript
import { play, playAll } from '../../helpers/audio';
import { ISoundAsset } from '../../types/assets';
// @ts-ignore: transform to TypeScript
import { LoadSounds } from './Audio';

interface PlaySoundsProps {
  sounds: ISoundAsset[];
  record?: boolean;
  playInitially?: boolean;
  recordingDuration?: number;
  onPlayEnd?: () => void;
  render: (
    buttonProps: TouchableOpacityProperties,
    isRecording: boolean
  ) =>
    | JSX.Element
    | JSX.Element[]
    | React.ReactPortal
    | string
    | number
    | null
    | false;
}

interface PlaySoundsInnerProps extends PlaySoundsProps {
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

    if (this.props.record) {
      const recording = new Audio.Recording();

      playAll(this.props.sounds)
        .then(() =>
          Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
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
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            playsInSilentLockedModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
          })
        )
        .then(() => recording.createNewLoadedSound())
        .then(({ sound }: { sound: Audio.Sound }) => play(sound))
        .then(() => onPlayEnd());
    } else {
      playAll(this.props.sounds).then(() => onPlayEnd());
    }
  };
}

export const PlaySounds: React.SFC<PlaySoundsProps> = props => {
  const { record } = props;
  const sounds: ISoundAsset[] = record
    ? [...props.sounds, loadSound.repeat()]
    : props.sounds;

  return (
    <LoadSounds
      sounds={sounds}
      /* tslint:disable-next-line:no-shadowed-variable */
      render={(sounds: Audio.Sound[], soundsLoaded: boolean) =>
        soundsLoaded && <PlaySoundsInner {...props} sounds={sounds} />}
    />
  );
};
