/* tslint:disable:no-console */
// import * as fs from 'fs';
import * as path from 'path';
import * as R from 'ramda';

import { writeFile } from '../packages/node-promises/index';
import { Article, IWord } from '../src/word';
// Legacy words_data from https://github.com/serlo-org/abc-legacy/blob/gh-pages/try/js/word_data.js
// @ts-ignore
import * as rawWords from './words-data';

interface IRawWord {
  id: string;
  word: string;
  def?: Article;
  singular?: string;
  plural?: string;
}

const assetsPath = path.join(__dirname, '..', 'src', 'assets');

const words: { [id: string]: IWord } = {};

const goodKeys = ['word', 'def', 'singular', 'plural', 'img'];
const goodArticles = ['der', 'die', 'das'];

const getWord = (rawWord: IRawWord, index: number) => {
  const { word } = rawWord;

  if (!word) {
    console.log(`[INFO] Skipped word ${index}:`, rawWord);
    return;
  }

  return word;
};

const getId = (rawWord: IRawWord, index: number) => {
  const word = getWord(rawWord, index);

  if (!word) {
    return;
  }

  const id = word
    .toLowerCase()
    .replace(/\s/g, '_')
    .replace(/ß/g, 'sz')
    .replace(/ä/g, 'ae')
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/é/g, 'e');

  if (id.match(/[^(a-z|_)]/)) {
    console.log(`[ERR] Bad id ${id}:`, word);
    return;
  }

  return id;
};

const getArticle = (rawWord: IRawWord, index: number) => {
  const { def } = rawWord;

  if (!def) {
    return;
  }

  if (!R.contains(def, goodArticles)) {
    if (def && !R.isEmpty(def)) {
      console.log(`[ERR] Bad article ${def}:`, getWord(rawWord, index));
    } else {
      console.log(`[WARN] Missing article:`, getWord(rawWord, index));
    }
    return;
  }

  return def;
};

const getSingular = (rawWord: IRawWord, index: number) => {
  const { singular } = rawWord;

  if (!singular || R.isEmpty(singular)) {
    console.log('[WARN] Missing singular:', getWord(rawWord, index));
    return;
  }

  return singular;
};

const getPlural = (rawWord: IRawWord, index: number) => {
  const { plural } = rawWord;

  if (!plural || R.isEmpty(plural)) {
    console.log('[WARN] Missing plural:', getWord(rawWord, index));
    return;
  }

  return plural;
};

rawWords.forEach((rawWord: IRawWord, index: number) => {
  const keys = R.keys(rawWord);
  const badKeys = R.difference(keys, goodKeys);

  if (!R.isEmpty(badKeys)) {
    console.log(`[ERR] Bad keys ${index}:`, rawWord);
    badKeys.forEach(key => console.log('  *', key));
    return;
  }

  const word = getWord(rawWord, index);

  if (!word) {
    return;
  }

  const id = getId(rawWord, index);

  if (!id) {
    return;
  }

  if (words[id]) {
    console.warn(`[WARN] Duplicate id ${id}:`, getWord(rawWord, index));
    return;
  }

  const article = getArticle(rawWord, index);
  const singular = getSingular(rawWord, index);
  const plural = getPlural(rawWord, index);

  words[id] = {
    id,
    word,
    article,
    singular,
    plural
  };
});

writeFile(
  path.join(assetsPath, 'words.json'),
  JSON.stringify(words, undefined, 2)
);
