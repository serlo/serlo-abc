import React from 'react';
import { storiesOf } from '@storybook/react-native';

import DifferFromSymbol from './DifferFromSymbol';

class DifferFromSymbolContainer extends React.Component {
  constructor() {
    super();
    this.state = { currentAnswer: null };
  }

  changeAnswer = answer => this.setState({ currentAnswer: answer });

  render() {
    return (
      <DifferFromSymbol
        symbols={['X', 'X', 'X', 'X', 'M']}
        currentAnswer={this.state.currentAnswer}
        changeAnswer={this.changeAnswer}
      />
    );
  }
}

storiesOf('exercises/DifferFromSymbol', module).add('M', () =>
  <DifferFromSymbolContainer />
);
