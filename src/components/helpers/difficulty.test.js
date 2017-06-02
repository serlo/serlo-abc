import { shallow } from 'enzyme';
import { forEach } from 'ramda';
import React from 'react';
import { View } from 'react-native';

import { createWithDifficulty } from './difficulty';

const C = ({ label, difficulty }) => (
  <View>
    <Text>{label}: {difficulty}</Text>
  </View>
);

describe.only('withDifficulty', () => {
  let Component, rendered, c;

  beforeEach(() => {
    Component = createWithDifficulty(() => 1 / 2)(C);
    rendered = shallow(<Component label="foo" />);

    c = rendered.find(C);
  });

  it('passes down props to the wrapped component', () => {
    expect(c.prop('label')).toEqual('foo');
  });

  it('passes down the difficulty level', () => {
    expect(c.prop('difficulty')).toEqual(1 / 2);
  });
});
