import words, { Article, IWord } from './assets/words';
import { Optional } from './types';
import { IImageAsset, ISoundAsset } from './types/assets';

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
    return this.word.image;
  }

  public getSound(): Optional<ISoundAsset> {
    return this.word.sound;
  }

  public getLongSound(): Optional<ISoundAsset> {
    return this.word.longSound;
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
