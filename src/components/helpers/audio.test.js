import { shallow } from 'enzyme';
import { forEach } from 'ramda';
import React from 'react';
import { View } from 'react-native';

import { createLoadSounds, createLoadSound } from './audio';

class Sound {
  constructor() {
    this.loadAsync = jest.fn();
    this.unloadAsync = jest.fn();
  }
}

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
    forEach(sound => {
      expect(sound.loadAsync).toHaveBeenCalled();
    }, view.prop('sounds'));
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
    expect(view.prop('sound').loadAsync).toHaveBeenCalled();
  });

  it('unloads all sounds on unmount', () => {
    rendered.unmount();

    expect(view.prop('sound').unloadAsync).toHaveBeenCalled();
  });
});
