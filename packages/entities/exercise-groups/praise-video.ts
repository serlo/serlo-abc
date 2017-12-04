import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

const praiseVideos = [
  {
    video: 'praise1',
    text: 'Super!'
  },
  {
    video: 'praise2',
    text: 'Prima! Weiter so!'
  },
  {
    video: 'praise3',
    text: 'Bravo! Du hastss geschafft! Ciao!'
  },
  {
    video: 'praise4',
    text: 'Sehr gut!'
  },
  {
    video: 'praise5',
    text: 'Das gefällt mir! Macht weiter so!'
  },
  {
    video: 'praise6',
    text: 'Gut gemacht!'
  },
  {
    video: 'praise7',
    text: 'Super!'
  },
  {
    video: 'praise8',
    text: 'Super! Sehr gut gemacht!'
  },
  {
    video: 'praise9',
    text: 'Sehr gut!'
  },
  {
    video: 'praise10',
    text: 'Wirklich eine klasse Leistung! Weiter so!'
  },
  {
    video: 'praise11',
    text: 'Hey, voll gut gemacht! Weiter so!'
  },
  {
    video: 'praise12',
    text: 'Spitze!'
  }
];

export class PraiseVideo extends AbstractExerciseGroup {
  protected generateExercises() {
    const [props] = sample(praiseVideos, 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'PraiseVideo',
        ...props
      })
    ];
  }
}
