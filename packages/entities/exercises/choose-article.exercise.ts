import { Maybe } from '../../maybe';
import { AbstractWord, Article } from '../word';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface ChooseArticleProps {
  word: AbstractWord;
}

export type ChooseArticleState = Maybe<Article>;

export type ChooseArticleFeedback = Maybe<{
  wrong: Article;
  correct: Article;
}>;

export class ChooseArticle extends AbstractExercise<
  ChooseArticleProps,
  ChooseArticleState,
  ChooseArticleFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: `Ananas`,
      props: {
        word: 'ananas'
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<ChooseArticleState, ChooseArticleFeedback>
  > = [
    {
      name: 'correct article',
      props: ChooseArticle.propsFixtures[0].props,
      state: 'die',
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong article',
      props: ChooseArticle.propsFixtures[0].props,
      state: 'das',
      feedback: {
        correct: 'die',
        wrong: 'das'
      },
      isCorrect: false
    }
  ];

  public getInitialState(): ChooseArticleState {
    return undefined;
  }

  public getFeedback(
    selectedArticle: ChooseArticleState
  ): ChooseArticleFeedback {
    const correctArticle = this.props.word.getArticle();

    if (
      !selectedArticle ||
      !correctArticle ||
      this.isSubmitDisabled(selectedArticle) ||
      this.isCorrect(selectedArticle)
    ) {
      return undefined;
    }

    return {
      wrong: selectedArticle,
      correct: correctArticle
    };
  }

  public isCorrect(selectedArticle: ChooseArticleState) {
    const { word } = this.props;

    return selectedArticle === word.getArticle();
  }
}
