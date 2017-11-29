import * as React from 'react';

import { storiesOf } from '@storybook/react-native';
import { AssetResolver } from '../../../asset-resolver';
import { EntityFactory } from '../../../../packages/entities/index';
import IntroduceLetter from './IntroduceLetter';
import { Exercise } from '../../helpers/exercise';

const resolver = new AssetResolver();
const factory = new EntityFactory(resolver);

class ExerciseGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getStateFromGroup();
  }

  getStateFromGroup() {
    return {
      exercise: this.props.group.getCurrentExercise(),
      exercises: this.props.group.getRemainingExercises()
    };
  }

  submit = state => {
    const { group } = this.props;
    group.submit(state);

    if (group.getRemainingExercises().length === 0) {
      this.props.onDone();
    } else {
      this.setState(this.getStateFromGroup());
    }
  };

  render() {
    const { exercise } = this.state;

    if (!exercise) {
      return null;
    }

    return (
      <Exercise
        exercise={exercise}
        Component={IntroduceLetter}
        onSubmit={this.submit}
      />
    );
  }
}

storiesOf('exercises/IntroduceLetter', module).add('default', () => {
  const group = factory.createExerciseGroup(
    'IntroduceLetter',
    ['ananas', 'affe', 'apfel'],
    [],
    {
      letter: 'a'
    }
  );

  return <ExerciseGroup onDone={() => console.warn('done')} group={group} />;
});
