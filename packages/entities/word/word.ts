import { Maybe } from '../../maybe';

import { AbstractWord } from './abstract-word.interface';
import { Article } from './article.interface';

export class Word extends AbstractWord {
  public toString(): string {
    return this.word.word;
  }

  public getArticle(): Maybe<Article> {
    return this.word.article;
  }

  public getRawSingular(): Maybe<string> {
    return this.word.singular;
  }

  public getSingular(): Maybe<string> {
    return this.removeSpecialChars(this.getRawSingular());
  }

  public getRawPlural(): Maybe<string> {
    return this.word.plural;
  }

  public getPlural(): Maybe<string> {
    return this.removeSpecialChars(this.getRawPlural());
  }

  public getImage() {
    return this.resolver.getImage(this.word.id);
  }

  public getSound() {
    return this.resolver.getSound(`${this.word.id}_short`);
  }

  public getLongSound() {
    return this.resolver.getSound(`${this.word.id}_long`);
  }

  private removeSpecialChars(str?: string): Maybe<string> {
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
