import { Audio } from 'expo';
import { forEach, map } from 'ramda';
import React, { Component } from 'react';

export const play = sound =>
  new Promise(resolve => {
    sound.playAsync();

    sound.setPlaybackFinishedCallback(() => {
      // Rewind the audio file so that it can be played again
      sound.setPositionAsync(0);
      resolve();
    });
  });

export const playAll = (sounds, delay = 1000) =>
  new Promise(resolve => {
    const playAllRecursive = ([sound, ...rest]) => {
      play(sound).then(() => {
        if (rest.length === 0) {
          return resolve();
        }

        setTimeout(() => {
          playAllRecursive(rest, delay);
        }, delay);
      });
    };

    playAllRecursive(sounds);
  });

export const createLoadSounds = Audio => C => {
  Audio.setIsEnabledAsync(true);

  class WithAudioComponent extends Component {
    constructor(props) {
      super(props);

      this.sounds = map(source => {
        const sound = new Audio.Sound({ source });
        sound.loadAsync();
        return sound;
      }, this.props.sounds);
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

export const createLoadSound = Audio => C => {
  Audio.setIsEnabledAsync(true);

  class WithAudioComponent extends Component {
    constructor(props) {
      super(props);

      this.sound = new Audio.Sound({ source: this.props.sound });
      this.sound.loadAsync();
    }

    componentWillUnmount() {
      this.sound.unloadAsync();
    }

    render() {
      return <C {...this.props} sound={this.sound} />;
    }
  }

  return WithAudioComponent;
};

export const loadSounds = createLoadSounds(Audio);
export const loadSound = createLoadSound(Audio);
