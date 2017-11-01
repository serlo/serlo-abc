import Word from './word';

describe('word', () => {
  let word: Word;

  beforeEach(() => {
    word = new Word('affe');
  });

  it('toString returns the word', () => {
    expect(word.toString()).toEqual('Affe');
  });

  it('getArticle returns the article of the word', () => {
    expect(word.getArticle()).toEqual('der');
  });

  it('getSingular returns the singular of the word', () => {
    expect(word.getSingular()).toEqual('Affe');
  });

  it('getPlural returns the plural of the word', () => {
    expect(word.getPlural()).toEqual('Affen');
  });

  it('getImage returns the image of the word', () => {
    expect(word.getImage()).toBeDefined();
  });

  it('getImage returns `undefined` if word has no image', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const word = new Word('hallo');

    expect(word.getImage()).toBeUndefined();
  });

  it('getSound returns the sound of the word', () => {
    expect(word.getSound()).toBeDefined();
  });

  it('getLongSound returns the long sound of the word', () => {
    expect(word.getLongSound()).toBeDefined();
  });
});
