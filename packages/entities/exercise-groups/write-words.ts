import { map } from 'ramda';

import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class WriteWords extends AbstractExerciseGroup {
  protected generateExercises() {
    const texts: string[] = this.props.texts;

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Schreiben Sie die Wörter.',
        sound: `exercises_schreiben_sie_die_woerter`
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
