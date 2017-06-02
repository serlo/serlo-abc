import { shallow } from 'enzyme';
import { forEach, times, xprod } from 'ramda';
import React from 'react';
import { View } from 'react-native';

import { play, createLoadSounds, createLoadSound } from './audio';

class Sound {
  constructor() {
    this.loadAsync = jest.fn();
    this.unloadAsync = jest.fn();

    this.playAsync = jest.fn();
    this.stopAsync = jest.fn();
    this.setCallback = jest.fn(cb => {
      this.cb = cb;
    });

    this.simulateFinishedPlaying = () => {
      this.cb({ didJustFinish: true });
    };
  }
}

describe('play', () => {
  let sound;

  beforeEach(() => {
    sound = new Sound();
  });

  it('plays the sound', () => {
    play(sound);
    expect(sound.playAsync).toHaveBeenCalled();
  });

  it('returns a promise that resolves after the sound has been played', done => {
    play(sound).then(done);

    // Check that callback is passed correctly
    expect(sound.setPlaybackFinishedCallback).toHaveBeenCalledWith(sound.cb);

    sound.simulateFinishedPlaying();
  });

  it('rewinds the sound file after it has finished playing', done => {
    play(sound).then(() => {
      expect(sound.stopAsync).toHaveBeenCalled();
      done();
    });

    sound.simulateFinishedPlaying();
  });
});

describe('playAll', () => {
  let playAll;

  beforeEach(() => {
    jest.useFakeTimers();
    playAll = require('./audio.js').playAll;
  });

  it('plays the sound if only one sound is passed', done => {
    const sound = new Sound();

    playAll([sound]).then(() => {
      expect(sound.stopAsync).toHaveBeenCalled();
      done();
    });

    expect(sound.playAsync).toHaveBeenCalled();
    sound.simulateFinishedPlaying();
  });

  it.only(
    'plays the second sound after the specified delay when the first sound has finished playing',
    done => {
      const sounds = times(() => new Sound(), 2);

      playAll(sounds, 1337).then(() => {
        expect(sounds[0].stopAsync).toHaveBeenCalled();
        expect(sounds[1].stopAsync).toHaveBeenCalled();
        done();
      });

      // First sound should have started playing
      expect(sounds[0].playAsync).toHaveBeenCalled();
      expect(sounds[1].playAsync).not.toHaveBeenCalled();
      expect(setTimeout).not.toHaveBeenCalled();

      sounds[0].simulateFinishedPlaying();

      // Wait for the pending promises to flush, see https://github.com/facebook/jest/issues/2157
      setImmediate(() => {
        expect(setTimeout.mock.calls.length).toEqual(1);
        expect(setTimeout.mock.calls[0][1]).toEqual(1337);
        expect(sounds[1].playAsync).not.toHaveBeenCalled();

        jest.runOnlyPendingTimers();

        expect(sounds[1].playAsync).toHaveBeenCalled();
        sounds[1].simulateFinishedPlaying();
      });
    }
  );
});

describe('loadSounds', () => {
  let Audio, Component, rendered, sounds, view;

  beforeEach(() => {
    Audio = { setIsEnabledAsync: jest.fn(), Sound };
    Component = createLoadSounds(Audio)(View);
    sounds = [
      require('../../assets/sounds/a.mp3'),
      require('../../assets/sounds/b.mp3')
    ];
    rendered = shallow(<Component sounds={sounds} foo="bar" />, {
      lifecycleExperimental: true
    });

    view = rendered.find(View);
  });

  it('enables audio', () => {
    expect(Audio.setIsEnabledAsync).toHaveBeenCalledWith(true);
  });

  it('passed the sounds down to the wrapped component', () => {
    const sounds = view.prop('sounds');

    expect(sounds).toHaveLength(2);
    expect(sounds[0]).toBeInstanceOf(Audio.Sound);
    expect(sounds[1]).toBeInstanceOf(Audio.Sound);
  });

  it('passes down all props to the wrapped component', () => {
    expect(view.prop('foo')).toEqual('bar');
  });

  it('loads all passed sounds', () => {
    forEach(([sound, source]) => {
      expect(sound.loadAsync).toHaveBeenCalledWith(source);
    }, xprod(view.prop('sounds'), sounds));
  });

  it('unloads all sounds on unmount', () => {
    rendered.unmount();

    forEach(sound => {
      expect(sound.unloadAsync).toHaveBeenCalled();
    }, view.prop('sounds'));
  });
});

describe('loadSound', () => {
  let Audio, Component, rendered, sound, view;

  beforeEach(() => {
    Audio = { setIsEnabledAsync: jest.fn(), Sound };
    Component = createLoadSound(Audio)(View);
    sound = require('../../assets/sounds/a.mp3');
    rendered = shallow(<Component sound={sound} foo="bar" />, {
      lifecycleExperimental: true
    });

    view = rendered.find(View);
  });

  it('enables audio', () => {
    expect(Audio.setIsEnabledAsync).toHaveBeenCalledWith(true);
  });

  it('passed the sounds down to the wrapped component', () => {
    expect(view.prop('sound')).toBeInstanceOf(Audio.Sound);
  });

  it('passes down all props to the wrapped component', () => {
    expect(view.prop('foo')).toEqual('bar');
  });

  it('loads all passed sounds', () => {
    expect(view.prop('sound').loadAsync).toHaveBeenCalledWith(sound);
  });

  it('unloads all sounds on unmount', () => {
    rendered.unmount();

    expect(view.prop('sound').unloadAsync).toHaveBeenCalled();
  });
});
