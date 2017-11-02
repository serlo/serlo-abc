import { times } from 'ramda';

import { play } from './audio';

class Sound {
  constructor() {
    this.playFromPositionAsync = jest.fn();
    this.stopAsync = jest.fn(() => Promise.resolve());
    this.setOnPlaybackStatusUpdate = jest.fn(cb => {
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
    expect(sound.playFromPositionAsync).toHaveBeenCalledWith(0);
  });

  it('returns a promise that resolves after the sound has been played', done => {
    play(sound).then(done);

    // Check that callback is passed correctly
    expect(sound.setOnPlaybackStatusUpdate).toHaveBeenCalledWith(sound.cb);

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
    playAll = require('./audio').playAll;
  });

  it('plays the sound if only one sound is passed', done => {
    const sound = new Sound();

    playAll([sound]).then(() => {
      expect(sound.stopAsync).toHaveBeenCalled();
      done();
    });

    expect(sound.playFromPositionAsync).toHaveBeenCalledWith(0);
    sound.simulateFinishedPlaying();
  });

  it('plays the second sound after the specified delay when the first sound has finished playing', done => {
    const sounds = times(() => new Sound(), 2);

    playAll(sounds, 1337).then(() => {
      expect(sounds[0].stopAsync).toHaveBeenCalled();
      expect(sounds[1].stopAsync).toHaveBeenCalled();
      done();
    });

    // First sound should have started playing
    expect(sounds[0].playFromPositionAsync).toHaveBeenCalledWith(0);
    expect(sounds[1].playFromPositionAsync).not.toHaveBeenCalled();
    expect(setTimeout).not.toHaveBeenCalled();

    sounds[0].simulateFinishedPlaying();

    // Wait for the pending promises to flush, see https://github.com/facebook/jest/issues/2157
    setImmediate(() => {
      expect(setTimeout.mock.calls.length).toEqual(1);
      expect(setTimeout.mock.calls[0][1]).toEqual(1337);
      expect(sounds[1].playFromPositionAsync).not.toHaveBeenCalled();

      jest.runOnlyPendingTimers();

      expect(sounds[1].playFromPositionAsync).toHaveBeenCalledWith(0);
      sounds[1].simulateFinishedPlaying();
    });
  });
});
