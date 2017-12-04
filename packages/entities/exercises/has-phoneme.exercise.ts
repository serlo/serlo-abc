import { Maybe } from '../../maybe';
import { AbstractWord } from '../word';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface HasPhonemeProps {
  word: AbstractWord;
  phoneme: string;
}

export interface HasPhonemeState {
  containsPhoneme?: boolean;
  soundsPlayed: boolean;
}

export type HasPhonemeFeedback = Maybe<{
  correctChoice: boolean;
  wrongChoice: boolean;
}>;

export class HasPhoneme extends AbstractExercise<
  HasPhonemeProps,
  HasPhonemeState,
  HasPhonemeFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Does Gabel contain phoneme B',
      props: {
        word: 'gabel',
        phoneme: 'B'
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<HasPhonemeState, HasPhonemeFeedback>
  > = [
    {
      name: 'correct choice',
      props: HasPhoneme.propsFixtures[0].props,
      state: { containsPhoneme: true, soundsPlayed: true },
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong choice',
      state: { containsPhoneme: false, soundsPlayed: true },
      props: HasPhoneme.propsFixtures[0].props,
      feedback: {
        correctChoice: true,
        wrongChoice: false
      },
      isCorrect: false
    }
  ];

  public getInitialState() {
    return { soundsPlayed: false };
  }

  public getFeedback(state: HasPhonemeState): HasPhonemeFeedback {
    if (
      typeof state.containsPhoneme === 'undefined' ||
      this.isSubmitDisabled(state) ||
      this.isCorrect(state)
    ) {
      return undefined;
    }

    return {
      correctChoice: !state.containsPhoneme,
      wrongChoice: state.containsPhoneme
    };
  }

  public isCorrect({ containsPhoneme }: HasPhonemeState): boolean {
    return containsPhoneme === this.containsPhoneme();
  }

  public isSubmitDisabled({
    soundsPlayed,
    containsPhoneme
  }: HasPhonemeState): boolean {
    return !soundsPlayed || typeof containsPhoneme === 'undefined';
  }

  private containsPhoneme(): boolean {
    const { phoneme, word } = this.props;
    const phonemeString: string = phoneme.toUpperCase();
    const wordString: string = word.toString().toUpperCase();

    return wordString.indexOf(phonemeString) !== -1;
  }
}
