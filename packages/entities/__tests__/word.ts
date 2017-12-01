import { EntityFactory } from '..';
import { MockAssetResolver } from '../asset-resolver/mock-asset-resolver';
import { AbstractWord } from '../word';

describe('word', () => {
  let word: AbstractWord;

  beforeEach(() => {
    const resolver = new MockAssetResolver();
    const factory = new EntityFactory(resolver);

    word = factory.createWord('affe') as AbstractWord;
  });

  it('toString() returns the word', () => {
    expect(word.toString()).toEqual('Affe');
  });

  it('getArticle() returns the article of the word', () => {
    expect(word.getArticle()).toEqual('der');
  });

  it('getSingular() returns the singular of the word', () => {
    expect(word.getSingular()).toEqual('Affe');
  });

  it('getPlural() returns the plural of the word', () => {
    expect(word.getPlural()).toEqual('Affen');
  });

  it('getImage() returns the image of the word', () => {
    expect(word.getImage()).toBeDefined();
  });

  it('getSound() returns the sound of the word', () => {
    expect(word.getSound()).toBeDefined();
  });

  it('getLongSound() returns the long sound of the word', () => {
    expect(word.getLongSound()).toBeDefined();
  });
});
