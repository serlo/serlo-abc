import { Canvas } from '../../../../packages/entities/exercises';
import { WriteWord } from './write-word';

export const Exercise = Canvas.Exercise;
export const fixtures = Canvas.createFixtures([
  { name: 'Anna', props: { word: 'Anna' } }
]);
export const Component = WriteWord;
