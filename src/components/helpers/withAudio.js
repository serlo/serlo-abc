import { Audio } from 'expo';
import { forEach, map } from 'ramda';
import React, { Component } from 'react';

export const withAudio = Audio =>
  C => {
    Audio.setIsEnabledAsync(true);

    class WithAudioComponent extends Component {
      constructor(props) {
        super(props);

        this.sounds = map(
          source => {
            const sound = new Audio.Sound({ source });
            sound.loadAsync();
            return sound;
          },
          this.props.sounds
        );
      }

      componentWillUnmount() {
        forEach(sound => sound.unloadAsync(), this.sounds);
      }

      render() {
        return <C {...this.props} sounds={this.sounds} />;
      }
    }

    return WithAudioComponent;
  };

export default withAudio(Audio);
