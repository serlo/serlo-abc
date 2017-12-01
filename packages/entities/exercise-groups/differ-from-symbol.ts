import { map, concat } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { Symbol } from '../exercises/differ-from-symbol.exercise';

export class DifferFromSymbol extends AbstractExerciseGroup {
  protected generateExercises() {
    const letterSymbols: Symbol[] = [
      { name: this.props.letter.toLowerCase(), isIcon: false },
      { name: this.props.letter.toUpperCase(), isIcon: false }
    ];
    const allTextSymbols: Symbol[] = map(
      symbol => ({ name: symbol, isIcon: false }),
      //prettier-ignore
      [
        '0','1','2','3', '4', '5', '6', '7', '8', '9',
        '=', '!', '"', '§', '$', '%', '&', '/', '(', ')',
        '?', '<', '>', ',', ';', '.', ':', '*', '+', '#', "'", '.', '_', '-'
      ]
    );
    const allIconSymbols: Symbol[] = map(
      icon => ({ name: icon, isIcon: true }),
      //prettier-ignore
      [
        'autorenew', 'block', 'bluetooth', 'border-all', 'camera', 'crop-free',
        'directions-subway', 'done', 'event-seat', 'extension', 'favorite-border',
        'fingerprint', 'flight', 'headset', 'healing', 'highlight', 'lightbulb-outline',
        'local-bar', 'local-phone', 'mic', 'nature', 'notifications', 'remove-red-eye',
        'security', 'star-border', 'usb', 'watch', 'whatshot'
      ]
    );
    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: `Finden Sie den Buchstaben`,
        sound: `exercises_finden_sie_den_buchstaben_${version}`
      }),
      ...map(letter => {
        const selectedSymbols: Symbol[] = sample(
          concat(allTextSymbols, allIconSymbols),
          4
        );
        const symbols = sample(
          [...selectedSymbols, letter],
          selectedSymbols.length + 1
        );
        return this.createExercise(ExerciseTypes.DifferFromSymbol, {
          type: 'DifferFromSymbol',
          symbols,
          correctIndex: symbols.indexOf(letter)
        });
      }, letterSymbols)
    ];
  }
}
