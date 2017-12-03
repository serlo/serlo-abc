import { addIndex, and, indexOf, map, reduce } from 'ramda';

import { Maybe } from '../../maybe';
import { AssetTypes } from '../asset-resolver';
import { AbstractWord } from '../word';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

const mapIndexed = addIndex(map);
export interface MissingTextProps {
  word?: AbstractWord;
  video?: AssetTypes.VideoAsset;
  text: string[];
  missing: number[];
  options: string[][];
}

export type MissingTextState = Maybe<number>[];

export type MissingTextFeedback = Maybe<
  Maybe<{
    wrongChoice: number;
    correctChoice: number;
  }>[]
>;

export class MissingText extends AbstractExercise<
  MissingTextProps,
  MissingTextState,
  MissingTextFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Missing letter in Apfel',
      props: {
        word: 'apfel',
        text: ['A', 'p', 'f', 'e', 'l'],
        missing: [3],
        options: [['a', 'n', 'e']]
      }
    },
    {
      name: 'Missing word (image asset)',
      props: {
        word: 'kiwi',
        text: ['Das', 'ist', 'keine', 'Ananas'],
        missing: [2],
        options: [['keine', 'eine']]
      }
    },
    {
      name: 'Missing word (video asset)',
      props: {
        video: 'placeholder.mp4',
        text: ['Ich', 'bin', 'Anna'],
        missing: [2],
        options: [['Nena', 'Anna']]
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<MissingTextState, MissingTextFeedback>
  > = [
    {
      name: 'Missing Letter: correct selected',
      props: MissingText.propsFixtures[0].props,
      state: [2],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'Missing Letter: wrong selected',
      props: MissingText.propsFixtures[0].props,
      state: [1],
      feedback: [
        {
          correctChoice: 2,
          wrongChoice: 1
        }
      ],
      isCorrect: false
    },
    {
      name: 'Missing Word with Image: correct selected',
      props: MissingText.propsFixtures[1].props,
      state: [0],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'Missing Word with Image: wrong selected',
      props: MissingText.propsFixtures[1].props,
      state: [1],
      feedback: [
        {
          correctChoice: 0,
          wrongChoice: 1
        }
      ],
      isCorrect: false
    },
    {
      name: 'Missing Word with Video: correct selected',
      props: MissingText.propsFixtures[2].props,
      state: [1],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'Missing Word with Video: wrong selected',
      props: MissingText.propsFixtures[2].props,
      state: [0],
      feedback: [
        {
          correctChoice: 1,
          wrongChoice: 0
        }
      ],
      isCorrect: false
    }
  ];

  public getInitialState(): MissingTextState {
    return map(selected => undefined, this.props.missing);
  }

  public getFeedback(state: MissingTextState): MissingTextFeedback {
    if (this.isSubmitDisabled(state) || this.isCorrect(state)) {
      return undefined;
    }

    return mapIndexed((selected, i) => {
      if (
        typeof selected === 'undefined' ||
        this.isCorrectChoice(selected, i)
      ) {
        return undefined;
      }

      return {
        wrongChoice: selected,
        correctChoice: indexOf(
          this.props.text[this.props.missing[i]],
          this.props.options[i]
        )
      };
    }, state);
  }

  public isCorrect(state: MissingTextState): boolean {
    return reduce(and, true, mapIndexed(this.isCorrectChoice, state));
  }

  isCorrectChoice = (selected: Maybe<number>, i: number): boolean => {
    if (typeof selected !== 'undefined') {
      const { options, text, missing } = this.props;
      return text[missing[i]] === options[i][selected];
    }

    return false;
  };

  public isSubmitDisabled(state: MissingTextState): boolean {
    return typeof state === 'undefined';
  }
}
