import loadImage from './assets/words/images';
import loadSound from './assets/words/sounds';
import { Optional } from './types';
import { IImageAsset, ISoundAsset } from './types/assets';

/* tslint:disable-next-line:no-var-requires */
const words: { [id: string]: IWord } = require('./assets/words.json');

export type Article = 'der' | 'die' | 'das';

export interface IWord {
  id: string;
  word: string;
  article?: Article;
  singular?: string;
  plural?: string;
}

class Word {
  private word: IWord;

  constructor(id: string) {
    this.word = words[id];
  }

  public toString(): string {
    return this.word.word;
  }

  public getArticle(): Optional<Article> {
    return this.word.article;
  }

  public getRawSingular(): Optional<string> {
    return this.word.singular;
  }

  public getSingular(): Optional<string> {
    return this.removeSpecialChars(this.getRawSingular());
  }

  public getRawPlural(): Optional<string> {
    return this.word.plural;
  }

  public getPlural(): Optional<string> {
    return this.removeSpecialChars(this.getRawPlural());
  }

  public getImage(): Optional<IImageAsset> {
    const load = loadImage[this.word.id];

    return load && load();
  }

  public getSound(): Optional<ISoundAsset> {
    const load = loadSound[`${this.word.id}_short`];

    return load && load();
  }

  public getLongSound(): Optional<ISoundAsset> {
    const load = loadSound[`${this.word.id}_long`];

    return load && load();
  }

  private removeSpecialChars(str?: string): Optional<string> {
    return (
      str &&
      str
        .replace('|', '')
        .replace("'", '')
        .replace('-', '')
    );
  }
}

export default Word;
