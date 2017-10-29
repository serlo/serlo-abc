import * as words from '../assets/words';

export const getWordObject = id => {
  return words[id];
};

export const getWord = word => {
  return word.word;
};

export const getRawSingular = word => {
  return word.singular;
};

const removeSpecialChars = str =>
  str
    .replace('|', '')
    .replace("'", '')
    .replace('-', '');

export const getSingular = word => {
  const singular = getRawSingular(word);

  return removeSpecialChars(singular);
};

export const getRawPlural = word => {
  return word.plural;
};

export const getPlural = word => {
  const plural = getRawPlural(word);

  return removeSpecialChars(plural);
};

export const getImage = word => {
  return word.image;
};

export const getSound = word => {
  return word.sound;
};

export const getLongSound = word => {
  return word.longSound;
};

export const getArticle = word => {
  return word.article;
};
