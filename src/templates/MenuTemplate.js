import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { start } from '../actions';
import { lessons } from '../courses/CourseAbc';

const MenuView = ({ start }) => (
  <View>
    {lessons.map((ex, index) => (
      <TouchableHighlight key={index} onPress={() => start(index)}>
        <Text>{index} - {ex.title}</Text>
      </TouchableHighlight>
    ))}
  </View>
);

const mapDispatchToProps = { start };
export const MenuTemplate = connect(null, mapDispatchToProps)(MenuView);
