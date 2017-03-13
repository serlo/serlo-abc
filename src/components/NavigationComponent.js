import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { next, tutorial, menu } from '../actions';

const NavigationComponent = ({ tutorialId, curViewId, menu, next }) => {
  const tutorial = (
    <Text onPress={() => this.props.tutorial(curViewId)}>Tutorial</Text>
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Text onPress={menu}>Menu</Text>
      {tutorialId ? tutorial : null}
      <Text onPress={() => next(curViewId)}>Next</Text>
    </View>
  );
};

const mapDispatchToProps = { menu, next, tutorial };

export const Navigation = connect(null, mapDispatchToProps)(
  NavigationComponent
);
