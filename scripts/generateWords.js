/* eslint-env node */
const fs = require('fs');
const path = require('path');
const R = require('ramda');

// Legacy words_data from https://github.com/serlo-org/abc-legacy/blob/gh-pages/try/js/word_data.js
const raw_words = require('./wordsData.js');
const words = {};

const assetsPath = path.join(__dirname, '..', 'src', 'assets');
const imagesPath = path.join(assetsPath, 'images');
const soundsPath = path.join(assetsPath, 'sounds');

const good_keys = ['word', 'def', 'singular', 'plural', 'img'];

const good_articles = ['der', 'die', 'das'];

const getWord = (raw_word, index) => {
  const { word } = raw_word;

  if (!word) {
    console.log(`[INFO] Skipped word ${index}:`, raw_word);
    return null;
  }

  return word;
};

const getId = (raw_word, index) => {
  const id = getWord(raw_word)
    .toLowerCase()
    .replace(/\s/g, '_')
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae')
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/é/g, 'e');

  if (id.match(/[^(a-z|_)]/)) {
    console.log(`[ERR] Bad id ${id}:`, getWord(raw_word));
    return null;
  }

  return id;
};

const getArticle = (raw_word, index) => {
  const { def } = raw_word;

  if (!R.contains(def, good_articles)) {
    if (def && !R.isEmpty(def)) {
      console.log(`[ERR] Bad article ${def}:`, getWord(raw_word));
    } else {
      console.log(`[WARN] Missing article:`, getWord(raw_word));
    }
    return null;
  }

  return def;
};

const getSingular = (raw_word, index) => {
  const { singular } = raw_word;

  if (!singular || R.isEmpty(singular)) {
    console.log('[WARN] Missing singular:', getWord(raw_word));
    return null;
  }

  return singular;
};

const getPlural = (raw_word, index) => {
  const { plural } = raw_word;

  if (!plural || R.isEmpty(plural)) {
    console.log('[WARN] Missing plural:', getWord(raw_word));
    return null;
  }

  return plural;
};

const getImage = (raw_word, index) => {
  const fileName = raw_word.img || getId(raw_word);
  const image = `${fileName}.jpg`;
  const absolutePath = path.join(imagesPath, image);

  if (!fs.existsSync(absolutePath)) {
    console.log(`[WARN] Missing image:`, getWord(raw_word));
    return null;
  }

  return image;
};

const getSound = (raw_word, index) => {
  const suffixes = ['_short.mp3', 'mp3'];

  for (let i = 0; i < suffixes.length; i++) {
    const sound = `${getId(raw_word)}${suffixes[i]}`;
    const absolutePath = path.join(soundsPath, sound);

    if (fs.existsSync(absolutePath)) {
      return sound;
    }
  }

  console.log(`[WARN] Missing sound:`, getWord(raw_word));
  return null;
};

const getLongSound = (raw_word, index) => {
  const sound = `${getId(raw_word)}_long.mp3`;
  const absolutePath = path.join(soundsPath, sound);

  if (!fs.existsSync(absolutePath)) {
    console.log(`[WARN] Missing long sound:`, getWord(raw_word));
    return null;
  }

  return sound;
};

raw_words.forEach((raw_word, index) => {
  const keys = R.keys(raw_word);
  const bad_keys = R.difference(keys, good_keys);

  if (!R.isEmpty(bad_keys)) {
    console.log(`[ERR] Bad keys ${index}:`, raw_word);
    bad_keys.forEach(key => console.log('  *', key));
    return;
  }

  const word = getWord(raw_word, index);

  if (!word) {
    return;
  }

  const id = getId(raw_word, index);

  if (words[id]) {
    console.warn(`[WARN] Duplicate id ${id}:`, getWord(raw_word));
  }

  const article = getArticle(raw_word);
  const singular = getSingular(raw_word);
  const plural = getPlural(raw_word);
  const image = getImage(raw_word);
  const sound = getSound(raw_word);
  const longSound = getLongSound(raw_word);

  words[id] = {
    id,
    word,
    article,
    singular,
    plural,
    image,
    sound,
    longSound
  };
});

fs.writeFile(
  path.join(assetsPath, 'words.json'),
  JSON.stringify(words, null, 2)
);
