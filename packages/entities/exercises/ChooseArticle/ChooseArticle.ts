// TODO: don't depend on React Native app
import { Optional } from '../../../../src/types';
// TODO: don't depend on React Native app
import Word, { Article } from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface ChooseArticleProps {
  word: Word;
}

export type ChooseArticleState = Optional<Article>;

export interface ChooseArticleFeedback {
  wrong?: Article;
  correct?: Article;
}

class ChooseArticle extends AbstractExercise<
  ChooseArticleProps,
  ChooseArticleState,
  ChooseArticleFeedback
> {
  public getInitialState() {
    return undefined;
  }

  public getFeedback(selectedArticle: ChooseArticleState) {
    if (
      this.isSubmitDisabled(selectedArticle) ||
      this.isCorrect(selectedArticle)
    ) {
      return {};
    }

    return {
      wrong: selectedArticle,
      correct: this.props.word.getArticle()
    };
  }

  public isCorrect(selectedArticle: ChooseArticleState) {
    const { word } = this.props;

    return selectedArticle === word.getArticle();
  }
}

export default ChooseArticle;
