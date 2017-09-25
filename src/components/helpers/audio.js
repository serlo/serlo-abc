import { Audio } from 'expo';
import { forEach, map } from 'ramda';
import React, { Component } from 'react';

export const createLoadSounds = Audio => C => {
  Audio.setIsEnabledAsync(true);

  class WithAudioComponent extends Component {
    constructor(props) {
      super(props);

      this.sounds = map(source => {
        const sound = new Audio.Sound();
        sound.loadAsync(source);
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

      this.sound = new Audio.Sound();
      this.sound.loadAsync(this.props.sound);
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
