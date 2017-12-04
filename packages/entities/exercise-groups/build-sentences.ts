import { map } from 'ramda';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class BuildSentences extends AbstractExerciseGroup {
  protected generateExercises() {
    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: `Bilden Sie Sätze.`,
        sound: `exercises_bilden_sie_saetze`
      }),
      ...map(
        ({ video, sentence }) =>
          this.createExercise(ExerciseTypes.BuildSentenceVideo, {
            type: 'BuildSentenceVideo',
            video,
            sentence
          }),
        this.props.sentences as Array<{ video: string; sentence: string }>
      )
    ];
  }
}
