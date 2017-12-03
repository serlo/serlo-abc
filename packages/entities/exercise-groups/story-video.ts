import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class StoryVideo extends AbstractExerciseGroup {
  protected generateExercises() {
    const video = this.props.video;

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'LandscapeVideo',
        video
      })
    ];
  }
}
