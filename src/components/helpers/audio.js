import { Audio } from 'expo';
import { forEach, map } from 'ramda';
import React, { Component } from 'react';

export const play = (sound, cb) => {
  sound.playAsync();

  sound.setCallback(status => {
    if (status.didJustFinish) {
      sound.setPositionAsync(0);
      cb && cb();
    }
  });
};

export const playAll = (sounds, delay = 1000) => {
  const playAllRecursive = ([sound, ...rest]) => {
    play(sound, () => {
      if (rest.length > 0) {
        setTimeout(() => playAllRecursive(rest), delay);
      }
    });
  };

  playAllRecursive(sounds);
};

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
