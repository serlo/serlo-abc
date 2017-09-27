import { Audio } from 'expo';
import { forEach, map } from 'ramda';
import { Component } from 'react';

export const createLoadSounds = Audio => {
  class LoadSounds extends Component {
    constructor(props) {
      super(props);

      this.sounds = map(source => {
        const sound = new Audio.Sound();
        sound.loadAsync(source);
        return sound;
      }, this.props.sounds || []);
    }

    componentWillUnmount() {
      forEach(sound => {
        sound.stopAsync();
        sound.unloadAsync();
      }, this.sounds);
    }

    render() {
      const render = this.props.render || (() => null);

      return render(this.sounds);
    }
  }

  return LoadSounds;
};

export const createLoadSound = Audio => {
  class LoadSound extends Component {
    constructor(props) {
      super(props);

      const { sound } = this.props;

      this.sound = null;

      if (sound) {
        this.sound = new Audio.Sound();
        this.sound.loadAsync(this.props.sound);
      }
    }

    componentWillUnmount() {
      this.sound.stopAsync();
      this.sound.unloadAsync();
    }

    render() {
      const render = this.props.render || (() => null);

      return render(this.sound);
    }
  }

  return LoadSound;
};

export const LoadSounds = createLoadSounds(Audio);
export const LoadSound = createLoadSound(Audio);
