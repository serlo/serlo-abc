import { map } from 'ramda';

import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class WriteWords extends AbstractExerciseGroup {
  protected generateExercises() {
    const texts: string[] = this.props.texts;
    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Schreiben Sie das Wort.',
        sound: `exercises_schreiben_sie_das_wort_${version}`
      }),
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'TutorialVideo',
        video: 'explanation_write_letter'
      }),
      ...map(
        text =>
          this.createExercise(ExerciseTypes.Canvas, {
            type: 'WriteWord',
            text
          }),
        texts
      )
    ];
  }
}
