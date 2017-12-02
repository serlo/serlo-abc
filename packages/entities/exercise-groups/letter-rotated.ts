import { identity, map, times } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class LetterRotated extends AbstractExerciseGroup {
  protected generateExercises() {
    const numberOfLetters = this.props.difficulty < 0.2 ? 3 : 5;
    const numberOfRotated = this.props.difficulty < 0.5 ? 1 : 2;
    const letters: string[] = sample(this.letters, numberOfLetters);
    const rotated: number[] = sample(
      times(identity, numberOfLetters),
      numberOfRotated
    );
    const angles: string[] = map(
      () => -180 + Math.random() * 360 + 'deg',
      rotated
    );

    const version = sample(['a', 'b'], 1);
    const text: string =
      numberOfRotated > 1
        ? 'Welche Buchstaben sind gedreht?'
        : 'Welcher Buchstabe ist gedreht';
    const sound: string =
      numberOfRotated > 1
        ? `exercises_welche_buchstaben_sind_gedreht_${version}`
        : `exercises_welcher_buchstabe_ist_gedreht_${version}`;

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text,
        sound
      }),
      this.createExercise(ExerciseTypes.LetterRotated, {
        type: 'LetterRotated',
        letters,
        rotated,
        angles
      })
    ];
  }
}
