import { Article } from './article.interface';

export interface SerializedWord {
  id: string;
  word: string;
  article?: Article;
  singular?: string;
  plural?: string;
}
