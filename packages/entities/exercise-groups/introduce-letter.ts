import { filter } from 'ramda';

import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class IntroduceLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter: string = this.props.letter.toLowerCase();
    const suitableWords = filter(
      word => word.startsWith(letter),
      this.newVocabulary
    );

    return [
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'IntroduceLetter',
        letter: `${letter.toUpperCase()}${letter}`,
        words: sample(suitableWords, 3)
      })
    ];
  }
}
