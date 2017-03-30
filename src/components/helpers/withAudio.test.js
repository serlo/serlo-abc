import { shallow } from 'enzyme';
import { forEach } from 'ramda';
import React from 'react';
import { View } from 'react-native';

import { withAudio } from './withAudio';

const sounds = [require('../../assets/sounds/a.mp3')];

let Audio, Component, rendered, view;

class Sound {
  constructor() {
    this.loadAsync = jest.fn();
    this.unloadAsync = jest.fn();
  }
}

beforeEach(() => {
  Audio = { setIsEnabledAsync: jest.fn(), Sound };
  Component = withAudio(Audio)(View);
  rendered = shallow(<Component sounds={sounds} foo="bar" />, { lifecycleExperimental: true });

  view = rendered.find(View);
});

it('enables audio', () => {
  expect(Audio.setIsEnabledAsync).toHaveBeenCalledWith(true);
});

it('passed the sounds down to the wrapped component', () => {
  const sounds = view.prop('sounds');

  expect(sounds).toHaveLength(1);
  expect(sounds[0]).toBeInstanceOf(Audio.Sound);
});

it('passes down all props to the wrapped component', () => {
  expect(view.prop('foo')).toEqual('bar');
});

it('loads all passed sounds', () => {
  forEach(
    sound => {
      expect(sound.loadAsync).toHaveBeenCalled();
    },
    view.prop('sounds')
  );
});

it('unloads all sounds on unmount', () => {
  rendered.unmount();

  forEach(
    sound => {
      expect(sound.unloadAsync).toHaveBeenCalled();
    },
    view.prop('sounds')
  );
});
