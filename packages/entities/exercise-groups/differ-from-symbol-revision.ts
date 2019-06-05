import { concat, flatten, map } from 'ramda';

import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { Figure } from '../exercises/differ-from-symbol.exercise';
import { capitalizeFirstLetter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class DifferFromSymbolRevision extends AbstractExerciseGroup {
  protected generateExercises() {
    const letterSymbolsInOrder = flatten<Figure>(
      map<string, Figure[]>(
        letter => [
          { name: letter.toLowerCase(), isIcon: false },
          ...(letter === 'ß'
            ? []
            : [{ name: capitalizeFirstLetter(letter), isIcon: false }])
        ],
        this.props.letters as string[]
      )
    );
    const letterSymbols: Figure[] = sample(
      letterSymbolsInOrder,
      letterSymbolsInOrder.length
    );
    const allTextSymbols: Figure[] = map(
      symbol => ({ name: symbol, isIcon: false }),
      // prettier-ignore
      [
        '0','1','2','3', '4', '5', '6', '7', '8', '9',
        '=', '!', '"', '§', '$', '%', '&', '/', '(', ')',
        '?', '<', '>', ',', ';', '.', ':', '*', '+', '#', "'", '.', '_', '-'
      ]
    );
    const allIconSymbols: Figure[] = map(
      icon => ({ name: icon, isIcon: true }),
      // prettier-ignore
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
        text: `Finden Sie den Buchstaben.`,
        sound: `exercises_finden_sie_den_buchstaben_${version}`
      }),
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'TutorialVideo',
        video: 'explanation_differ_from_symbol'
      }),
      ...map(letter => {
        const selectedSymbols: Figure[] = sample(
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
