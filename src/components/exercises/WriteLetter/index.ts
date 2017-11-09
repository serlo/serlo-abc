import { Canvas } from '../../../../packages/entities/exercises';
import { WriteLetter } from './write-letter';

export const Exercise = Canvas.Exercise;
export const fixtures = Canvas.createFixtures([
  { name: 'A', props: { letter: 'A' } }
]);
export const Component = WriteLetter;
