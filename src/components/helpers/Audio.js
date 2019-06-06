import { Audio } from 'expo-av';
import { forEach, filter, identity, map, zipWith } from 'ramda';
import { Component } from 'react';

export const createLoadSounds = Audio => {
  class LoadSounds extends Component {
    constructor(props) {
      super(props);

      this.sources = filter(identity, this.props.sounds || []);
      this.sounds = map(_source => new Audio.Sound(), this.sources);
      this.state = { soundsLoaded: false };
    }

    componentDidMount() {
      Promise.all(
        zipWith(
          (sound, source) => sound.loadAsync(source),
          this.sounds,
          this.sources
        )
      ).then(() => this.setState({ soundsLoaded: true }));
    }

    componentWillUnmount() {
      forEach(sound => {
        sound
          .stopAsync()
          .then(() => sound.unloadAsync())
          .catch(() => {});
      }, this.sounds);
    }

    render() {
      const render = this.props.render || (() => null);

      return render(this.sounds, this.state.soundsLoaded);
    }
  }

  return LoadSounds;
};

export const createLoadSound = Audio => {
  class LoadSound extends Component {
    constructor(props) {
      super(props);

      if (this.props.sound) {
        this.sound = new Audio.Sound();
        this.state = { soundLoaded: false };
      } else {
        this.sound = null;
        this.state = { soundLoaded: true };
      }
    }

    componentDidMount() {
      if (this.sound) {
        this.sound.loadAsync(this.props.sound).then(() => {
          this.setState({ soundLoaded: true });
        });
      }
    }

    componentWillUnmount() {
      this.sound.stopAsync().then(() => this.sound.unloadAsync());
    }

    render() {
      const render = this.props.render || (() => null);

      return render(this.sound, this.state.soundLoaded);
    }
  }

  return LoadSound;
};

export const LoadSounds = createLoadSounds(Audio);
export const LoadSound = createLoadSound(Audio);
