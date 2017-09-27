import * as helpers from './words';

describe('helpers/words', () => {
  let word;

  beforeEach(() => {
    word = helpers.getWordObject('affe');
  });

  it('getWord returns the word', () => {
    expect(helpers.getWord(word)).toBe('Affe');
  });

  it('getSingular returns the singular of the word', () => {
    expect(helpers.getSingular(word)).toBe('Affe');
  });

  it('getPlural returns the plural of the word', () => {
    expect(helpers.getPlural(word)).toBe('Affen');
  });

  it('getImage returns the image of the word', () => {
    expect(helpers.getImage(word)).toBeDefined();
  });

  it('getImage returns `null` word has no image', () => {
    const word = helpers.getWordObject('hallo');

    expect(helpers.getImage(word)).toBe(null);
  });

  it('getSound returns the sound of the word', () => {
    expect(helpers.getSound(word)).toBeDefined();
  });

  it('getLongSound returns the long sound of the word', () => {
    expect(helpers.getLongSound(word)).toBeDefined();
  });
});
