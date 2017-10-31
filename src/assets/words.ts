import { Optional } from '../types';
import { IImageAsset, ISoundAsset } from '../types/assets';

export type Article = 'der' | 'die' | 'das';

export interface IWord {
  id: string;
  word: string;
  article: Optional<Article>;
  singular: Optional<string>;
  plural: Optional<string>;
  image: Optional<IImageAsset>;
  sound: Optional<ISoundAsset>;
  longSound: Optional<ISoundAsset>;
}

const words: { [propName: string]: IWord } = {
  ananas: {
    id: 'ananas',
    word: 'Ananas',
    article: 'die',
    singular: "'Ana|nas",
    plural: "'Ana|nas",
    image: require('./images/ananas.jpg') as IImageAsset,
    sound: require('./sounds/ananas_short.mp3') as ISoundAsset,
    longSound: require('./sounds/ananas_long.mp3') as ISoundAsset
  },

  apfel: {
    id: 'apfel',
    word: 'Apfel',
    article: 'der',
    singular: "'Ap|fel",
    plural: "'Äp|fel",
    image: require('./images/apfel.jpg') as IImageAsset,
    sound: require('./sounds/apfel_short.mp3') as ISoundAsset,
    longSound: require('./sounds/apfel_long.mp3') as ISoundAsset
  },

  dose: {
    id: 'dose',
    word: 'Dose',
    article: 'die',
    singular: 'D-o|se',
    plural: 'D-o|sen',
    image: require('./images/dose.jpg') as IImageAsset,
    sound: require('./sounds/dose_short.mp3') as ISoundAsset,
    longSound: require('./sounds/dose_long.mp3') as ISoundAsset
  },

  esel: {
    id: 'esel',
    word: 'Esel',
    article: 'der',
    singular: '-Esel',
    plural: '-Esel',
    image: require('./images/esel.jpg') as IImageAsset,
    sound: require('./sounds/esel_short.mp3') as ISoundAsset,
    longSound: require('./sounds/esel_long.mp3') as ISoundAsset
  },

  oma: {
    id: 'oma',
    word: 'Oma',
    article: 'die',
    singular: '-Oma',
    plural: '-Omas',
    image: require('./images/oma.jpg') as IImageAsset,
    sound: require('./sounds/oma_short.mp3') as ISoundAsset,
    longSound: require('./sounds/oma_long.mp3') as ISoundAsset
  },

  sonne: {
    id: 'sonne',
    word: 'Sonne',
    article: 'die',
    singular: "S'on|ne",
    plural: "S'on|nen",
    image: require('./images/sonne.jpg') as IImageAsset,
    sound: require('./sounds/sonne_short.mp3') as ISoundAsset,
    longSound: require('./sounds/sonne_long.mp3') as ISoundAsset
  },

  affe: {
    id: 'affe',
    word: 'Affe',
    article: 'der',
    singular: "'Af|fe",
    plural: "'Af|fen",
    image: require('./images/affe.jpg') as IImageAsset,
    sound: require('./sounds/affe_short.mp3') as ISoundAsset,
    longSound: require('./sounds/affe_long.mp3') as ISoundAsset
  },

  nase: {
    id: 'nase',
    word: 'Nase',
    article: 'die',
    singular: 'N-a|se',
    plural: 'N-a|sen',
    image: require('./images/nase.jpg') as IImageAsset,
    sound: require('./sounds/nase_short.mp3') as ISoundAsset,
    longSound: require('./sounds/nase_long.mp3') as ISoundAsset
  },

  sofa: {
    id: 'sofa',
    word: 'Sofa',
    article: 'das',
    singular: 'S-o|fa',
    plural: 'S-o|fas',
    image: require('./images/sofa.jpg') as IImageAsset,
    sound: require('./sounds/sofa_short.mp3') as ISoundAsset,
    longSound: require('./sounds/sofa_long.mp3') as ISoundAsset
  },

  nudeln: {
    id: 'nudeln',
    word: 'Nudeln',
    article: 'die',
    singular: 'N-u|del',
    plural: 'N-u|deln',
    image: require('./images/nudeln.jpg') as IImageAsset,
    sound: require('./sounds/nudeln_short.mp3') as ISoundAsset,
    longSound: require('./sounds/nudeln_long.mp3') as ISoundAsset
  },

  nadel: {
    id: 'nadel',
    word: 'Nadel',
    article: 'die',
    singular: 'N-a|del',
    plural: 'N-a|deln',
    image: require('./images/nadel.jpg') as IImageAsset,
    sound: require('./sounds/nadel_short.mp3') as ISoundAsset,
    longSound: require('./sounds/nadel_long.mp3') as ISoundAsset
  },

  banane: {
    id: 'banane',
    word: 'Banane',
    article: 'die',
    singular: 'Ba|n-a|ne',
    plural: 'Ba|n-a|nen',
    image: require('./images/banane.jpg') as IImageAsset,
    sound: require('./sounds/banane_short.mp3') as ISoundAsset,
    longSound: require('./sounds/banane_long.mp3') as ISoundAsset
  },

  kanne: {
    id: 'kanne',
    word: 'Kanne',
    article: 'die',
    singular: "K'an|ne",
    plural: "K'an|nen",
    image: require('./images/kanne.jpg') as IImageAsset,
    sound: require('./sounds/kanne_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kanne_long.mp3') as ISoundAsset
  },

  kino: {
    id: 'kino',
    word: 'Kino',
    article: 'das',
    singular: 'K-i|no',
    plural: 'K-i|nos',
    image: require('./images/kino.jpg') as IImageAsset,
    sound: require('./sounds/kino_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kino_long.mp3') as ISoundAsset
  },

  opa: {
    id: 'opa',
    word: 'Opa',
    article: 'der',
    singular: '-Opa',
    plural: '-Opas',
    image: require('./images/opa.jpg') as IImageAsset,
    sound: require('./sounds/opa_short.mp3') as ISoundAsset,
    longSound: require('./sounds/opa_long.mp3') as ISoundAsset
  },

  ente: {
    id: 'ente',
    word: 'Ente',
    article: 'die',
    singular: "'En|te",
    plural: "'En|ten",
    image: require('./images/ente.jpg') as IImageAsset,
    sound: require('./sounds/ente_short.mp3') as ISoundAsset,
    longSound: require('./sounds/ente_long.mp3') as ISoundAsset
  },

  elefant: {
    id: 'elefant',
    word: 'Elefant',
    article: 'der',
    singular: "'Ele|fant",
    plural: "'Ele|fan|ten",
    image: require('./images/elefant.jpg') as IImageAsset,
    sound: require('./sounds/elefant_short.mp3') as ISoundAsset,
    longSound: require('./sounds/elefant_long.mp3') as ISoundAsset
  },

  tee: {
    id: 'tee',
    word: 'Tee',
    article: 'der',
    singular: 'T-ee',
    plural: undefined,
    image: require('./images/tee.jpg') as IImageAsset,
    sound: require('./sounds/tee_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tee_long.mp3') as ISoundAsset
  },

  kaffee: {
    id: 'kaffee',
    word: 'Kaffee',
    article: 'der',
    singular: "K'af|fee",
    plural: undefined,
    image: require('./images/kaffee.jpg') as IImageAsset,
    sound: require('./sounds/kaffee_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kaffee_long.mp3') as ISoundAsset
  },

  saft: {
    id: 'saft',
    word: 'Saft',
    article: 'der',
    singular: "S'aft",
    plural: "S'äf|te",
    image: require('./images/saft.jpg') as IImageAsset,
    sound: require('./sounds/saft_short.mp3') as ISoundAsset,
    longSound: require('./sounds/saft_long.mp3') as ISoundAsset
  },

  morgen: {
    id: 'morgen',
    word: 'Morgen',
    article: 'der',
    singular: "M'or|gen",
    plural: "M'or|gen",
    image: require('./images/morgen.jpg') as IImageAsset,
    sound: require('./sounds/morgen_short.mp3') as ISoundAsset,
    longSound: require('./sounds/morgen_long.mp3') as ISoundAsset
  },

  tag: {
    id: 'tag',
    word: 'Tag',
    article: 'der',
    singular: 'T-ag',
    plural: 'T-a|ge',
    image: require('./images/tag.jpg') as IImageAsset,
    sound: require('./sounds/tag_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tag_long.mp3') as ISoundAsset
  },

  abend: {
    id: 'abend',
    word: 'Abend',
    article: 'der',
    singular: '-Abend',
    plural: '-Aben|de',
    image: require('./images/abend.jpg') as IImageAsset,
    sound: require('./sounds/abend_short.mp3') as ISoundAsset,
    longSound: require('./sounds/abend_long.mp3') as ISoundAsset
  },

  hallo: {
    id: 'hallo',
    word: 'Hallo',
    article: undefined,
    singular: "H'al|lo",
    plural: undefined,
    image: undefined,
    sound: require('./sounds/hallo.mp3') as ISoundAsset,
    longSound: undefined
  },

  ich: {
    id: 'ich',
    word: 'Ich',
    article: undefined,
    singular: "'Ich",
    plural: undefined,
    image: undefined,
    sound: undefined,
    longSound: undefined
  },

  guten_morgen: {
    id: 'guten_morgen',
    word: 'Guten Morgen',
    article: undefined,
    singular: undefined,
    plural: undefined,
    image: require('./images/guten_morgen.jpg') as IImageAsset,
    sound: require('./sounds/guten_morgen.mp3') as ISoundAsset,
    longSound: undefined
  },

  guten_tag: {
    id: 'guten_tag',
    word: 'Guten Tag',
    article: undefined,
    singular: undefined,
    plural: undefined,
    image: require('./images/guten_tag.jpg') as IImageAsset,
    sound: require('./sounds/guten_tag.mp3') as ISoundAsset,
    longSound: undefined
  },

  guten_abend: {
    id: 'guten_abend',
    word: 'Guten Abend',
    article: undefined,
    singular: undefined,
    plural: undefined,
    image: require('./images/guten_abend.jpg') as IImageAsset,
    sound: require('./sounds/guten_abend.mp3') as ISoundAsset,
    longSound: undefined
  },

  sessel: {
    id: 'sessel',
    word: 'Sessel',
    article: 'der',
    singular: "S'es|sel",
    plural: "S'es|sel",
    image: require('./images/sessel.jpg') as IImageAsset,
    sound: require('./sounds/sessel_short.mp3') as ISoundAsset,
    longSound: require('./sounds/sessel_long.mp3') as ISoundAsset
  },

  see: {
    id: 'see',
    word: 'See',
    article: 'der',
    singular: 'S-ee',
    plural: 'S-e|en',
    image: require('./images/see.jpg') as IImageAsset,
    sound: require('./sounds/see_short.mp3') as ISoundAsset,
    longSound: require('./sounds/see_long.mp3') as ISoundAsset
  },

  tasse: {
    id: 'tasse',
    word: 'Tasse',
    article: 'die',
    singular: "T'as|se",
    plural: "T'as|sen",
    image: require('./images/tasse.jpg') as IImageAsset,
    sound: require('./sounds/tasse_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tasse_long.mp3') as ISoundAsset
  },

  kissen: {
    id: 'kissen',
    word: 'Kissen',
    article: 'das',
    singular: "K'is|sen",
    plural: "K'is|sen",
    image: require('./images/kissen.jpg') as IImageAsset,
    sound: require('./sounds/kissen_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kissen_long.mp3') as ISoundAsset
  },

  essen: {
    id: 'essen',
    word: 'essen',
    article: undefined,
    singular: "'es|sen",
    plural: "'es|sen",
    image: require('./images/essen.jpg') as IImageAsset,
    sound: require('./sounds/essen_short.mp3') as ISoundAsset,
    longSound: require('./sounds/essen_long.mp3') as ISoundAsset
  },

  pass: {
    id: 'pass',
    word: 'Pass',
    article: 'der',
    singular: "P'ass",
    plural: "P'äs|se",
    image: require('./images/pass.jpg') as IImageAsset,
    sound: require('./sounds/pass_short.mp3') as ISoundAsset,
    longSound: require('./sounds/pass_long.mp3') as ISoundAsset
  },

  wasser: {
    id: 'wasser',
    word: 'Wasser',
    article: 'das',
    singular: "W'as|ser",
    plural: "W'as|ser",
    image: require('./images/wasser.jpg') as IImageAsset,
    sound: require('./sounds/wasser_short.mp3') as ISoundAsset,
    longSound: require('./sounds/wasser_long.mp3') as ISoundAsset
  },

  tomate: {
    id: 'tomate',
    word: 'Tomate',
    article: 'die',
    singular: 'To|m-a|te',
    plural: 'To|m-a|ten',
    image: require('./images/tomate.jpg') as IImageAsset,
    sound: require('./sounds/tomate_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tomate_long.mp3') as ISoundAsset
  },

  bett: {
    id: 'bett',
    word: 'Bett',
    article: 'das',
    singular: "B'ett",
    plural: "B'et|ten",
    image: require('./images/bett.jpg') as IImageAsset,
    sound: require('./sounds/bett_short.mp3') as ISoundAsset,
    longSound: require('./sounds/bett_long.mp3') as ISoundAsset
  },

  kette: {
    id: 'kette',
    word: 'Kette',
    article: 'die',
    singular: "K'et|te",
    plural: "K'et|ten",
    image: require('./images/kette.jpg') as IImageAsset,
    sound: require('./sounds/kette_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kette_long.mp3') as ISoundAsset
  },

  salat: {
    id: 'salat',
    word: 'Salat',
    article: 'der',
    singular: 'Sa|l-at',
    plural: 'Sa|l-a|te',
    image: require('./images/salat.jpg') as IImageAsset,
    sound: require('./sounds/salat_short.mp3') as ISoundAsset,
    longSound: require('./sounds/salat_long.mp3') as ISoundAsset
  },

  tonne: {
    id: 'tonne',
    word: 'Tonne',
    article: 'die',
    singular: "T'on|ne",
    plural: "T'on|nen",
    image: require('./images/tonne.jpg') as IImageAsset,
    sound: require('./sounds/tonne_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tonne_long.mp3') as ISoundAsset
  },

  karotte: {
    id: 'karotte',
    word: 'Karotte',
    article: 'die',
    singular: "Ka|r'ot|te",
    plural: "Ka|r'ot|ten",
    image: require('./images/karotte.jpg') as IImageAsset,
    sound: require('./sounds/karotte_short.mp3') as ISoundAsset,
    longSound: require('./sounds/karotte_long.mp3') as ISoundAsset
  },

  topf: {
    id: 'topf',
    word: 'Topf',
    article: 'der',
    singular: "T'opf",
    plural: "T'öp|fe",
    image: require('./images/topf.jpg') as IImageAsset,
    sound: require('./sounds/topf_short.mp3') as ISoundAsset,
    longSound: require('./sounds/topf_long.mp3') as ISoundAsset
  },

  hose: {
    id: 'hose',
    word: 'Hose',
    article: 'die',
    singular: 'H-o|se',
    plural: 'H-o|sen',
    image: require('./images/hose.jpg') as IImageAsset,
    sound: require('./sounds/hose_short.mp3') as ISoundAsset,
    longSound: require('./sounds/hose_long.mp3') as ISoundAsset
  },

  obst: {
    id: 'obst',
    word: 'Obst',
    article: 'das',
    singular: '-Obst',
    plural: undefined,
    image: require('./images/obst.jpg') as IImageAsset,
    sound: require('./sounds/obst_short.mp3') as ISoundAsset,
    longSound: require('./sounds/obst_long.mp3') as ISoundAsset
  },

  ofen: {
    id: 'ofen',
    word: 'Ofen',
    article: 'der',
    singular: '-Ofen',
    plural: '-Öfen',
    image: require('./images/ofen.jpg') as IImageAsset,
    sound: require('./sounds/ofen_short.mp3') as ISoundAsset,
    longSound: require('./sounds/ofen_long.mp3') as ISoundAsset
  },

  tor: {
    id: 'tor',
    word: 'Tor',
    article: 'das',
    singular: 'T-or',
    plural: 'T-o|re',
    image: undefined,
    sound: require('./sounds/tor_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tor_long.mp3') as ISoundAsset
  },

  fotos: {
    id: 'fotos',
    word: 'Fotos',
    article: 'das',
    singular: 'F-o|to',
    plural: 'F-o|tos',
    image: require('./images/fotos.jpg') as IImageAsset,
    sound: require('./sounds/fotos_short.mp3') as ISoundAsset,
    longSound: require('./sounds/fotos_long.mp3') as ISoundAsset
  },

  rot: {
    id: 'rot',
    word: 'rot',
    article: undefined,
    singular: 'r-ot',
    plural: undefined,
    image: require('./images/rot.jpg') as IImageAsset,
    sound: require('./sounds/rot_short.mp3') as ISoundAsset,
    longSound: require('./sounds/rot_long.mp3') as ISoundAsset
  },

  rose: {
    id: 'rose',
    word: 'Rose',
    article: 'die',
    singular: 'R-o|se',
    plural: 'R-o|sen',
    image: require('./images/rose.jpg') as IImageAsset,
    sound: require('./sounds/rose_short.mp3') as ISoundAsset,
    longSound: require('./sounds/rose_long.mp3') as ISoundAsset
  },

  brot: {
    id: 'brot',
    word: 'Brot',
    article: 'das',
    singular: 'Br-ot',
    plural: 'Br-o|te',
    image: require('./images/brot.jpg') as IImageAsset,
    sound: require('./sounds/brot_short.mp3') as ISoundAsset,
    longSound: require('./sounds/brot_long.mp3') as ISoundAsset
  },

  arm: {
    id: 'arm',
    word: 'Arm',
    article: 'der',
    singular: "'Arm",
    plural: "'Ar|me",
    image: require('./images/arm.jpg') as IImageAsset,
    sound: require('./sounds/arm_short.mp3') as ISoundAsset,
    longSound: require('./sounds/arm_long.mp3') as ISoundAsset
  },

  ohr: {
    id: 'ohr',
    word: 'Ohr',
    article: 'das',
    singular: '-Ohr',
    plural: '-Oh|ren',
    image: require('./images/ohr.jpg') as IImageAsset,
    sound: require('./sounds/ohr_short.mp3') as ISoundAsset,
    longSound: require('./sounds/ohr_long.mp3') as ISoundAsset
  },

  bart: {
    id: 'bart',
    word: 'Bart',
    article: 'der',
    singular: "B'art",
    plural: "B'är|te",
    image: require('./images/bart.jpg') as IImageAsset,
    sound: require('./sounds/bart_short.mp3') as ISoundAsset,
    longSound: require('./sounds/bart_long.mp3') as ISoundAsset
  },

  kind: {
    id: 'kind',
    word: 'Kind',
    article: 'das',
    singular: "K'ind",
    plural: "K'in|der",
    image: require('./images/kind.jpg') as IImageAsset,
    sound: require('./sounds/kind_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kind_long.mp3') as ISoundAsset
  },

  igel: {
    id: 'igel',
    word: 'Igel',
    article: 'der',
    singular: '-Igel',
    plural: '-Igel',
    image: require('./images/igel.jpg') as IImageAsset,
    sound: require('./sounds/igel_short.mp3') as ISoundAsset,
    longSound: require('./sounds/igel_long.mp3') as ISoundAsset
  },

  insel: {
    id: 'insel',
    word: 'Insel',
    article: 'die',
    singular: "'In|sel",
    plural: "'In|seln",
    image: require('./images/insel.jpg') as IImageAsset,
    sound: require('./sounds/insel_short.mp3') as ISoundAsset,
    longSound: require('./sounds/insel_long.mp3') as ISoundAsset
  },

  kita: {
    id: 'kita',
    word: 'Kita',
    article: 'die',
    singular: 'K-i|ta',
    plural: 'K-i|tas',
    image: require('./images/kita.jpg') as IImageAsset,
    sound: require('./sounds/kita_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kita_long.mp3') as ISoundAsset
  },

  bier: {
    id: 'bier',
    word: 'Bier',
    article: 'das',
    singular: 'B-ier',
    plural: 'B-ie|re',
    image: require('./images/bier.jpg') as IImageAsset,
    sound: require('./sounds/bier_short.mp3') as ISoundAsset,
    longSound: require('./sounds/bier_long.mp3') as ISoundAsset
  },

  tier: {
    id: 'tier',
    word: 'Tier',
    article: 'das',
    singular: 'T-ier',
    plural: 'T-ie|re',
    image: require('./images/tier.jpg') as IImageAsset,
    sound: require('./sounds/tier_short.mp3') as ISoundAsset,
    longSound: require('./sounds/tier_long.mp3') as ISoundAsset
  },

  kiwi: {
    id: 'kiwi',
    word: 'Kiwi',
    article: 'die',
    singular: 'K-i|wi',
    plural: 'K-i|wis',
    image: require('./images/kiwi.jpg') as IImageAsset,
    sound: require('./sounds/kiwi_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kiwi_long.mp3') as ISoundAsset
  },

  haar: {
    id: 'haar',
    word: 'Haar',
    article: 'das',
    singular: 'H-aar',
    plural: 'H-aa|re',
    image: require('./images/haar.jpg') as IImageAsset,
    sound: require('./sounds/haar_short.mp3') as ISoundAsset,
    longSound: require('./sounds/haar_long.mp3') as ISoundAsset
  },

  uhr: {
    id: 'uhr',
    word: 'Uhr',
    article: 'die',
    singular: '-Uhr',
    plural: '-Uh|ren',
    image: require('./images/uhr.jpg') as IImageAsset,
    sound: require('./sounds/uhr_short.mp3') as ISoundAsset,
    longSound: require('./sounds/uhr_long.mp3') as ISoundAsset
  },

  sohn: {
    id: 'sohn',
    word: 'Sohn',
    article: 'der',
    singular: 'S-ohn',
    plural: 'S-öh|ne',
    image: require('./images/sohn.jpg') as IImageAsset,
    sound: require('./sounds/sohn_short.mp3') as ISoundAsset,
    longSound: require('./sounds/sohn_long.mp3') as ISoundAsset
  },

  bahn: {
    id: 'bahn',
    word: 'Bahn',
    article: 'die',
    singular: 'B-ahn',
    plural: 'B-ah|nen',
    image: require('./images/bahn.jpg') as IImageAsset,
    sound: require('./sounds/bahn_short.mp3') as ISoundAsset,
    longSound: require('./sounds/bahn_long.mp3') as ISoundAsset
  },

  kuh: {
    id: 'kuh',
    word: 'Kuh',
    article: 'die',
    singular: 'K-uh',
    plural: 'K-ü|he',
    image: require('./images/kuh.jpg') as IImageAsset,
    sound: require('./sounds/kuh_short.mp3') as ISoundAsset,
    longSound: require('./sounds/kuh_long.mp3') as ISoundAsset
  },

  hahn: {
    id: 'hahn',
    word: 'Hahn',
    article: 'der',
    singular: 'H-ahn',
    plural: 'H-äh|ne',
    image: require('./images/hahn.jpg') as IImageAsset,
    sound: require('./sounds/hahn_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  henne: {
    id: 'henne',
    word: 'Henne',
    article: 'die',
    singular: "H'en|ne",
    plural: "H'en|nen",
    image: require('./images/henne.jpg') as IImageAsset,
    sound: require('./sounds/henne_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  ball: {
    id: 'ball',
    word: 'Ball',
    article: 'der',
    singular: "B'all",
    plural: "B'äl|le",
    image: require('./images/ball.jpg') as IImageAsset,
    sound: require('./sounds/ball_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  birne: {
    id: 'birne',
    word: 'Birne',
    article: 'die',
    singular: "B'ir|ne",
    plural: "B'ir|nen",
    image: require('./images/birne.jpg') as IImageAsset,
    sound: require('./sounds/birne_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  besen: {
    id: 'besen',
    word: 'Besen',
    article: 'der',
    singular: "B'e|sen",
    plural: "B'e|sen",
    image: require('./images/besen.jpg') as IImageAsset,
    sound: require('./sounds/besen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  nebel: {
    id: 'nebel',
    word: 'Nebel',
    article: 'der',
    singular: "N'e|bel",
    plural: "N'e|bel",
    image: require('./images/nebel.jpg') as IImageAsset,
    sound: require('./sounds/nebel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bohne: {
    id: 'bohne',
    word: 'Bohne',
    article: 'die',
    singular: 'B-oh|ne',
    plural: 'B-oh|nen',
    image: require('./images/bohne.jpg') as IImageAsset,
    sound: require('./sounds/bohne_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  gabel: {
    id: 'gabel',
    word: 'Gabel',
    article: 'die',
    singular: 'G-a|bel',
    plural: 'G-a|beln',
    image: require('./images/gabel.jpg') as IImageAsset,
    sound: require('./sounds/gabel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  blatt: {
    id: 'blatt',
    word: 'Blatt',
    article: 'das',
    singular: "Bl'att",
    plural: "BL'ät|ter",
    image: require('./images/blatt.jpg') as IImageAsset,
    sound: require('./sounds/blatt_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lampe: {
    id: 'lampe',
    word: 'Lampe',
    article: 'die',
    singular: "L'am|pe",
    plural: "L'am|pen",
    image: require('./images/lampe.jpg') as IImageAsset,
    sound: require('./sounds/lampe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  malen: {
    id: 'malen',
    word: 'malen',
    article: undefined,
    singular: "m'a|len",
    plural: undefined,
    image: require('./images/malen.jpg') as IImageAsset,
    sound: require('./sounds/malen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lamm: {
    id: 'lamm',
    word: 'Lamm',
    article: 'das',
    singular: "L'amm",
    plural: "L'äm|mer",
    image: require('./images/lamm.jpg') as IImageAsset,
    sound: require('./sounds/lamm_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  laden: {
    id: 'laden',
    word: 'Laden',
    article: 'der',
    singular: 'L-a|den',
    plural: 'L-ä|den',
    image: require('./images/laden.jpg') as IImageAsset,
    sound: require('./sounds/laden_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  teller: {
    id: 'teller',
    word: 'Teller',
    article: 'der',
    singular: "T'el|ler",
    plural: "T'el|ler",
    image: require('./images/teller.jpg') as IImageAsset,
    sound: require('./sounds/teller_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lila: {
    id: 'lila',
    word: 'lila',
    article: undefined,
    singular: 'l-i|la',
    plural: undefined,
    image: require('./images/lila.jpg') as IImageAsset,
    sound: require('./sounds/lila_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  mond: {
    id: 'mond',
    word: 'Mond',
    article: 'der',
    singular: 'M-ond',
    plural: 'M-on|de',
    image: require('./images/mond.jpg') as IImageAsset,
    sound: require('./sounds/mond_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  mama: {
    id: 'mama',
    word: 'Mama',
    article: 'die',
    singular: "M'a|ma",
    plural: "M'a|mas",
    image: require('./images/mama.jpg') as IImageAsset,
    sound: require('./sounds/mama_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  name: {
    id: 'name',
    word: 'Name',
    article: 'der',
    singular: 'N-a|me',
    plural: 'N-a|men',
    image: undefined,
    sound: require('./sounds/name_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  limo: {
    id: 'limo',
    word: 'Limo',
    article: 'die',
    singular: "L'i|mo",
    plural: "L'i|mos",
    image: require('./images/limo.jpg') as IImageAsset,
    sound: require('./sounds/limo_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  turm: {
    id: 'turm',
    word: 'Turm',
    article: 'der',
    singular: "T'urm",
    plural: "T'ür|me",
    image: require('./images/turm.jpg') as IImageAsset,
    sound: require('./sounds/turm_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  salami: {
    id: 'salami',
    word: 'Salami',
    article: 'die',
    singular: 'Sa|l-a|mi',
    plural: 'Sa|l-a|mis',
    image: require('./images/salami.jpg') as IImageAsset,
    sound: require('./sounds/salami_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  hemd: {
    id: 'hemd',
    word: 'Hemd',
    article: 'das',
    singular: "H'emd",
    plural: "H'emd|en",
    image: require('./images/hemd.jpg') as IImageAsset,
    sound: require('./sounds/hemd_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bad: {
    id: 'bad',
    word: 'Bad',
    article: 'das',
    singular: 'B-ad',
    plural: 'B-ä|der',
    image: require('./images/bad.jpg') as IImageAsset,
    sound: require('./sounds/bad_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  rad: {
    id: 'rad',
    word: 'Rad',
    article: 'das',
    singular: 'R-ad',
    plural: 'R-ä|der',
    image: require('./images/rad.jpg') as IImageAsset,
    sound: require('./sounds/rad_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bild: {
    id: 'bild',
    word: 'Bild',
    article: 'das',
    singular: "B'ild",
    plural: "B'il|der",
    image: require('./images/bild.jpg') as IImageAsset,
    sound: require('./sounds/bild_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  sand: {
    id: 'sand',
    word: 'Sand',
    article: 'der',
    singular: "S'and",
    plural: "S'an|de",
    image: require('./images/sand.jpg') as IImageAsset,
    sound: require('./sounds/sand_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  dusche: {
    id: 'dusche',
    word: 'Dusche',
    article: 'die',
    singular: 'D-u|sche',
    plural: 'D-u|schen',
    image: require('./images/dusche.jpg') as IImageAsset,
    sound: require('./sounds/dusche_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lift: {
    id: 'lift',
    word: 'Lift',
    article: 'der',
    singular: "L'ift",
    plural: "L'if|te",
    image: require('./images/lift.jpg') as IImageAsset,
    sound: require('./sounds/lift_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  heft: {
    id: 'heft',
    word: 'Heft',
    article: 'das',
    singular: "H'eft",
    plural: "H'ef|te",
    image: require('./images/heft.jpg') as IImageAsset,
    sound: require('./sounds/heft_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  familie: {
    id: 'familie',
    word: 'Familie',
    article: 'die',
    singular: 'Fa|m-i|lie',
    plural: 'Fa|m-i|lien',
    image: undefined,
    sound: require('./sounds/familie_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fernseher: {
    id: 'fernseher',
    word: 'Fernseher',
    article: 'der',
    singular: "F'ern|se|her",
    plural: "F'ern|se|her",
    image: require('./images/fernseher.jpg') as IImageAsset,
    sound: require('./sounds/fernseher_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fahren: {
    id: 'fahren',
    word: 'fahren',
    article: undefined,
    singular: 'f-ah|ren',
    plural: 'f-ah|ren',
    image: require('./images/fahren.jpg') as IImageAsset,
    sound: require('./sounds/fahren_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fleisch: {
    id: 'fleisch',
    word: 'Fleisch',
    article: 'das',
    singular: 'Fl-eisch',
    plural: undefined,
    image: require('./images/fleisch.jpg') as IImageAsset,
    sound: require('./sounds/fleisch_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fisch: {
    id: 'fisch',
    word: 'Fisch',
    article: 'der',
    singular: "F'isch",
    plural: "F'i|sche",
    image: require('./images/fisch.jpg') as IImageAsset,
    sound: require('./sounds/fisch_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  keks: {
    id: 'keks',
    word: 'Keks',
    article: 'der',
    singular: 'K-eks',
    plural: 'K-e|kse',
    image: require('./images/keks.jpg') as IImageAsset,
    sound: require('./sounds/keks_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kiosk: {
    id: 'kiosk',
    word: 'Kiosk',
    article: 'der',
    singular: 'K-i|osk',
    plural: 'K-i|os|ke',
    image: require('./images/kiosk.jpg') as IImageAsset,
    sound: require('./sounds/kiosk_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  klinik: {
    id: 'klinik',
    word: 'Klinik',
    article: 'die',
    singular: 'Kl-i|nik',
    plural: 'Kl-i|ni|ken',
    image: require('./images/klinik.jpg') as IImageAsset,
    sound: require('./sounds/klinik_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bank: {
    id: 'bank',
    word: 'Bank',
    article: 'die',
    singular: "B'ank",
    plural: "B'än|ke",
    image: require('./images/bank.jpg') as IImageAsset,
    sound: require('./sounds/bank_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  krokodil: {
    id: 'krokodil',
    word: 'Krokodil',
    article: 'das',
    singular: 'Kro|ko|d-il',
    plural: 'Kro|ko|d-i|le',
    image: require('./images/krokodil.jpg') as IImageAsset,
    sound: undefined,
    longSound: undefined
  },

  decke: {
    id: 'decke',
    word: 'Decke',
    article: 'die',
    singular: "D'ec|ke",
    plural: "D'ec|ken",
    image: require('./images/decke.jpg') as IImageAsset,
    sound: require('./sounds/decke_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  socke: {
    id: 'socke',
    word: 'Socke',
    article: 'die',
    singular: "S'oc|ke",
    plural: "S'oc|ken",
    image: require('./images/socke.jpg') as IImageAsset,
    sound: require('./sounds/socke_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kabel: {
    id: 'kabel',
    word: 'Kabel',
    article: 'das',
    singular: 'K-a|bel',
    plural: 'K-a|bel',
    image: require('./images/kabel.jpg') as IImageAsset,
    sound: require('./sounds/kabel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schal: {
    id: 'schal',
    word: 'Schal',
    article: 'der',
    singular: 'Sch-al',
    plural: 'Sch-als',
    image: require('./images/schal.jpg') as IImageAsset,
    sound: require('./sounds/schal_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schaf: {
    id: 'schaf',
    word: 'Schaf',
    article: 'das',
    singular: 'Sch-af',
    plural: 'Sch-a|fe',
    image: undefined,
    sound: require('./sounds/schaf_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schere: {
    id: 'schere',
    word: 'Schere',
    article: 'die',
    singular: 'Sch-e|re',
    plural: 'Sch-e|ren',
    image: require('./images/schere.jpg') as IImageAsset,
    sound: require('./sounds/schere_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schreiben: {
    id: 'schreiben',
    word: 'schreiben',
    article: undefined,
    singular: 'schr-ei|ben',
    plural: 'schr-ei|ben',
    image: require('./images/schreiben.jpg') as IImageAsset,
    sound: require('./sounds/schreiben_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  tisch: {
    id: 'tisch',
    word: 'Tisch',
    article: 'der',
    singular: "T'isch",
    plural: "T'i|sche",
    image: require('./images/tisch.jpg') as IImageAsset,
    sound: require('./sounds/tisch_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schule: {
    id: 'schule',
    word: 'Schule',
    article: 'die',
    singular: 'Sch-u|le',
    plural: 'Sch-u|len',
    image: undefined,
    sound: require('./sounds/schule_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  tasche: {
    id: 'tasche',
    word: 'Tasche',
    article: 'die',
    singular: "T'a|sche",
    plural: "T'a|schen",
    image: require('./images/tasche.jpg') as IImageAsset,
    sound: require('./sounds/tasche_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  flasche: {
    id: 'flasche',
    word: 'Flasche',
    article: 'die',
    singular: "Fl'a|sche",
    plural: "Fl'a|schen",
    image: require('./images/flasche.jpg') as IImageAsset,
    sound: require('./sounds/flasche_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  nuss: {
    id: 'nuss',
    word: 'Nuss',
    article: 'die',
    singular: "N'uss",
    plural: "N'üs|se",
    image: require('./images/nuss.jpg') as IImageAsset,
    sound: require('./sounds/nuss_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  hut: {
    id: 'hut',
    word: 'Hut',
    article: 'der',
    singular: 'H-ut',
    plural: 'H-ü|te',
    image: require('./images/hut.jpg') as IImageAsset,
    sound: require('./sounds/hut_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kuss: {
    id: 'kuss',
    word: 'Kuss',
    article: 'der',
    singular: "K'uss",
    plural: "K'üs|se",
    image: require('./images/kuss.jpg') as IImageAsset,
    sound: require('./sounds/kuss_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bus: {
    id: 'bus',
    word: 'Bus',
    article: 'der',
    singular: "B'us",
    plural: "B'us|se",
    image: require('./images/bus.jpg') as IImageAsset,
    sound: require('./sounds/bus_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fluss: {
    id: 'fluss',
    word: 'Fluss',
    article: 'der',
    singular: "Fl'uss",
    plural: "Fl'üs|se",
    image: require('./images/fluss.jpg') as IImageAsset,
    sound: require('./sounds/fluss_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schuhe: {
    id: 'schuhe',
    word: 'Schuhe',
    article: 'der',
    singular: 'Sch-uh',
    plural: 'Sch-u|he',
    image: require('./images/schuhe.jpg') as IImageAsset,
    sound: require('./sounds/schuhe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  blut: {
    id: 'blut',
    word: 'Blut',
    article: 'das',
    singular: 'Bl-ut',
    plural: undefined,
    image: require('./images/blut.jpg') as IImageAsset,
    sound: require('./sounds/blut_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  regen: {
    id: 'regen',
    word: 'Regen',
    article: 'der',
    singular: 'R-e|gen',
    plural: undefined,
    image: require('./images/regen.jpg') as IImageAsset,
    sound: require('./sounds/regen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  regal: {
    id: 'regal',
    word: 'Regal',
    article: 'das',
    singular: 'Re|g-al',
    plural: 'Re|g-a|le',
    image: require('./images/regal.jpg') as IImageAsset,
    sound: require('./sounds/regal_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  nagel: {
    id: 'nagel',
    word: 'Nagel',
    article: 'der',
    singular: 'N-a|gel',
    plural: 'N-ä|gel',
    image: require('./images/nagel.jpg') as IImageAsset,
    sound: require('./sounds/nagel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  wagen: {
    id: 'wagen',
    word: 'Wagen',
    article: 'der',
    singular: 'W-a|gen',
    plural: 'W-ä|gen',
    image: require('./images/wagen.jpg') as IImageAsset,
    sound: require('./sounds/wagen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zug: {
    id: 'zug',
    word: 'Zug',
    article: 'der',
    singular: 'Z-ug',
    plural: 'Z-ü|ge',
    image: require('./images/zug.jpg') as IImageAsset,
    sound: require('./sounds/zug_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  weg: {
    id: 'weg',
    word: 'Weg',
    article: 'der',
    singular: 'W-eg',
    plural: 'W-e|ge',
    image: require('./images/weg.jpg') as IImageAsset,
    sound: require('./sounds/weg_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  garten: {
    id: 'garten',
    word: 'Garten',
    article: 'der',
    singular: "G'ar|ten",
    plural: "G'är|ten",
    image: require('./images/garten.jpg') as IImageAsset,
    sound: require('./sounds/garten_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  gruen: {
    id: 'gruen',
    word: 'grün',
    article: undefined,
    singular: 'gr-ün',
    plural: 'gr-ün',
    image: require('./images/gruen.jpg') as IImageAsset,
    sound: require('./sounds/gruen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  ausweis: {
    id: 'ausweis',
    word: 'Ausweis',
    article: 'der',
    singular: '-Aus|weis',
    plural: '-Aus|wei|se',
    image: require('./images/ausweis.jpg') as IImageAsset,
    sound: require('./sounds/ausweis_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  krawatte: {
    id: 'krawatte',
    word: 'Krawatte',
    article: 'die',
    singular: "Kra|w'at|te",
    plural: "Kra|w'at|ten",
    image: require('./images/krawatte.jpg') as IImageAsset,
    sound: require('./sounds/krawatte_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lastwagen: {
    id: 'lastwagen',
    word: 'Lastwagen',
    article: 'der',
    singular: "L'ast|wa|gen",
    plural: "L'ast|wä|gen",
    image: require('./images/lastwagen.jpg') as IImageAsset,
    sound: require('./sounds/lastwagen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  wandern: {
    id: 'wandern',
    word: 'wandern',
    article: undefined,
    singular: "w'an|dern",
    plural: "w'an|dern",
    image: undefined,
    sound: require('./sounds/wandern_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  wanderweg: {
    id: 'wanderweg',
    word: 'Wanderweg',
    article: 'der',
    singular: "W'an|der|weg",
    plural: "W'an|der|we|ge",
    image: require('./images/wanderweg.jpg') as IImageAsset,
    sound: require('./sounds/wanderweg_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  puppe: {
    id: 'puppe',
    word: 'Puppe',
    article: 'die',
    singular: "P'up|pe",
    plural: "P'up|pen",
    image: require('./images/puppe.jpg') as IImageAsset,
    sound: require('./sounds/puppe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  papier: {
    id: 'papier',
    word: 'Papier',
    article: 'das',
    singular: 'Pa|p-ier',
    plural: 'Pa|p-ie|re',
    image: undefined,
    sound: require('./sounds/papier_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  suppe: {
    id: 'suppe',
    word: 'Suppe',
    article: 'die',
    singular: "S'up|pe",
    plural: "S'up|pen",
    image: require('./images/suppe.jpg') as IImageAsset,
    sound: require('./sounds/suppe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lippe: {
    id: 'lippe',
    word: 'Lippe',
    article: 'die',
    singular: "L'ip|pe",
    plural: "L'ip|pen",
    image: require('./images/lippe.jpg') as IImageAsset,
    sound: require('./sounds/lippe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  ampel: {
    id: 'ampel',
    word: 'Ampel',
    article: 'die',
    singular: "'Am|pel",
    plural: "'Am|peln",
    image: require('./images/ampel.jpg') as IImageAsset,
    sound: require('./sounds/ampel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  treppe: {
    id: 'treppe',
    word: 'Treppe',
    article: 'die',
    singular: "T'rep|pe",
    plural: "T'rep|pen",
    image: require('./images/treppe.jpg') as IImageAsset,
    sound: require('./sounds/treppe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  rezept: {
    id: 'rezept',
    word: 'Rezept',
    article: 'das',
    singular: "Re|z'ept",
    plural: "Re|z'ep|te",
    image: require('./images/rezept.jpg') as IImageAsset,
    sound: require('./sounds/rezept_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  ei: {
    id: 'ei',
    word: 'Ei',
    article: 'das',
    singular: '-Ei',
    plural: '-Ei|er',
    image: require('./images/ei.jpg') as IImageAsset,
    sound: require('./sounds/ei_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  eis: {
    id: 'eis',
    word: 'Eis',
    article: 'das',
    singular: '-Eis',
    plural: undefined,
    image: require('./images/eis.jpg') as IImageAsset,
    sound: require('./sounds/eis_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  wein: {
    id: 'wein',
    word: 'Wein',
    article: 'der',
    singular: 'W-ein',
    plural: 'W-ei|ne',
    image: require('./images/wein.jpg') as IImageAsset,
    sound: require('./sounds/wein_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  klein: {
    id: 'klein',
    word: 'klein',
    article: undefined,
    singular: 'klein',
    plural: 'klein',
    image: undefined,
    sound: require('./sounds/klein_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  weisz: {
    id: 'weisz',
    word: 'weiß',
    article: undefined,
    singular: 'weiß',
    plural: 'weiß',
    image: require('./images/weisz.jpg') as IImageAsset,
    sound: require('./sounds/weisz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bein: {
    id: 'bein',
    word: 'Bein',
    article: 'das',
    singular: 'B-ein',
    plural: 'B-ei|ne',
    image: undefined,
    sound: require('./sounds/bein_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kleid: {
    id: 'kleid',
    word: 'Kleid',
    article: 'das',
    singular: 'Kl-eid',
    plural: 'Kl-ei|der',
    image: require('./images/kleid.jpg') as IImageAsset,
    sound: require('./sounds/kleid_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schwein: {
    id: 'schwein',
    word: 'Schwein',
    article: 'das',
    singular: 'Schw-ein',
    plural: 'Schw-ei|ne',
    image: require('./images/schwein.jpg') as IImageAsset,
    sound: require('./sounds/schwein_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kneipe: {
    id: 'kneipe',
    word: 'Kneipe',
    article: 'die',
    singular: 'Kn-ei|pe',
    plural: 'Kn-ei|pen',
    image: require('./images/kneipe.jpg') as IImageAsset,
    sound: require('./sounds/kneipe_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  reis: {
    id: 'reis',
    word: 'Reis',
    article: 'der',
    singular: 'R-eis',
    plural: undefined,
    image: require('./images/reis.jpg') as IImageAsset,
    sound: require('./sounds/reis_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kerze: {
    id: 'kerze',
    word: 'Kerze',
    article: 'die',
    singular: "K'er|ze",
    plural: "K'er|zen",
    image: require('./images/kerze.jpg') as IImageAsset,
    sound: require('./sounds/kerze_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  holz: {
    id: 'holz',
    word: 'Holz',
    article: 'das',
    singular: "H'olz",
    plural: "H'öl|zer",
    image: require('./images/holz.jpg') as IImageAsset,
    sound: require('./sounds/holz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  katze: {
    id: 'katze',
    word: 'Katze',
    article: 'die',
    singular: "K'at|ze",
    plural: "K'at|zen",
    image: require('./images/katze.jpg') as IImageAsset,
    sound: require('./sounds/katze_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  arzt: {
    id: 'arzt',
    word: 'Arzt',
    article: 'der',
    singular: "'Arzt",
    plural: "'Ärz|te",
    image: require('./images/arzt.jpg') as IImageAsset,
    sound: require('./sounds/arzt_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  pizza: {
    id: 'pizza',
    word: 'Pizza',
    article: 'die',
    singular: "P'iz|za",
    plural: "P'iz|zas",
    image: require('./images/pizza.jpg') as IImageAsset,
    sound: require('./sounds/pizza_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  herz: {
    id: 'herz',
    word: 'Herz',
    article: 'das',
    singular: "H'erz",
    plural: "H'er|zen",
    image: require('./images/herz.jpg') as IImageAsset,
    sound: require('./sounds/herz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  salz: {
    id: 'salz',
    word: 'Salz',
    article: 'das',
    singular: "S'alz",
    plural: "S'al|ze",
    image: require('./images/salz.jpg') as IImageAsset,
    sound: require('./sounds/salz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  pilz: {
    id: 'pilz',
    word: 'Pilz',
    article: 'der',
    singular: "P'ilz",
    plural: "P'il|ze",
    image: require('./images/pilz.jpg') as IImageAsset,
    sound: require('./sounds/pilz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zwiebel: {
    id: 'zwiebel',
    word: 'Zwiebel',
    article: 'die',
    singular: 'Zw-ie|bel',
    plural: 'Zw-ie|beln',
    image: require('./images/zwiebel.jpg') as IImageAsset,
    sound: require('./sounds/zwiebel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  lachen: {
    id: 'lachen',
    word: 'lachen',
    article: undefined,
    singular: 'lachen',
    plural: 'lachen',
    image: require('./images/lachen.jpg') as IImageAsset,
    sound: require('./sounds/lachen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  dach: {
    id: 'dach',
    word: 'Dach',
    article: 'das',
    singular: "D'ach",
    plural: "D'ä|cher",
    image: require('./images/dach.jpg') as IImageAsset,
    sound: require('./sounds/dach_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kochen: {
    id: 'kochen',
    word: 'kochen',
    article: undefined,
    singular: 'kochen',
    plural: 'kochen',
    image: require('./images/kochen.jpg') as IImageAsset,
    sound: require('./sounds/kochen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  buch: {
    id: 'buch',
    word: 'Buch',
    article: 'das',
    singular: 'B-uch',
    plural: 'B-ü|cher',
    image: require('./images/buch.jpg') as IImageAsset,
    sound: require('./sounds/buch_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kuchen: {
    id: 'kuchen',
    word: 'Kuchen',
    article: 'der',
    singular: 'K-u|chen',
    plural: 'K-u|chen',
    image: require('./images/kuchen.jpg') as IImageAsset,
    sound: require('./sounds/kuchen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bach: {
    id: 'bach',
    word: 'Bach',
    article: 'der',
    singular: "B'ach",
    plural: "B'ä|che",
    image: require('./images/bach.jpg') as IImageAsset,
    sound: require('./sounds/bach_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  gesicht: {
    id: 'gesicht',
    word: 'Gesicht',
    article: 'das',
    singular: "Ge|s'icht",
    plural: "Ge|s'ich|ter",
    image: undefined,
    sound: require('./sounds/gesicht_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  hochhaus: {
    id: 'hochhaus',
    word: 'Hochhaus',
    article: 'das',
    singular: 'H-och|haus',
    plural: 'H-och|häu|ser',
    image: require('./images/hochhaus.jpg') as IImageAsset,
    sound: require('./sounds/hochhaus_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kirche: {
    id: 'kirche',
    word: 'Kirche',
    article: 'die',
    singular: "K'ir|che",
    plural: "K'ir|chen",
    image: require('./images/kirche.jpg') as IImageAsset,
    sound: require('./sounds/kirche_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  aufzug: {
    id: 'aufzug',
    word: 'Aufzug',
    article: 'der',
    singular: '-Auf|zug',
    plural: '-Auf|zü|ge',
    image: require('./images/aufzug.jpg') as IImageAsset,
    sound: require('./sounds/aufzug_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  bauch: {
    id: 'bauch',
    word: 'Bauch',
    article: 'der',
    singular: 'B-auch',
    plural: 'B-äu|che',
    image: require('./images/bauch.jpg') as IImageAsset,
    sound: require('./sounds/bauch_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zaun: {
    id: 'zaun',
    word: 'Zaun',
    article: 'der',
    singular: 'Z-aun',
    plural: 'Z-äu|ne',
    image: require('./images/zaun.jpg') as IImageAsset,
    sound: require('./sounds/zaun_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  baum: {
    id: 'baum',
    word: 'Baum',
    article: 'der',
    singular: 'B-aum',
    plural: 'B-äu|me',
    image: undefined,
    sound: require('./sounds/baum_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  blau: {
    id: 'blau',
    word: 'blau',
    article: undefined,
    singular: 'bl-au',
    plural: 'bl-au',
    image: require('./images/blau.jpg') as IImageAsset,
    sound: require('./sounds/blau_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  braun: {
    id: 'braun',
    word: 'braun',
    article: undefined,
    singular: 'br-aun',
    plural: 'br-aun',
    image: require('./images/braun.jpg') as IImageAsset,
    sound: require('./sounds/braun_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  haus: {
    id: 'haus',
    word: 'Haus',
    article: 'das',
    singular: 'H-aus',
    plural: 'H-äu|ser',
    image: undefined,
    sound: require('./sounds/haus_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  maus: {
    id: 'maus',
    word: 'Maus',
    article: 'die',
    singular: 'M-aus',
    plural: 'M-äu|se',
    image: require('./images/maus.jpg') as IImageAsset,
    sound: require('./sounds/maus_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  mauer: {
    id: 'mauer',
    word: 'Mauer',
    article: 'die',
    singular: 'M-au|er',
    plural: 'M-au|ern',
    image: require('./images/mauer.jpg') as IImageAsset,
    sound: require('./sounds/mauer_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  jahr: {
    id: 'jahr',
    word: 'Jahr',
    article: 'das',
    singular: 'J-ahr',
    plural: 'J-ah|re',
    image: undefined,
    sound: require('./sounds/jahr_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  ja: {
    id: 'ja',
    word: 'ja',
    article: undefined,
    singular: 'j-a',
    plural: 'j-a',
    image: undefined,
    sound: require('./sounds/ja_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  jung: {
    id: 'jung',
    word: 'jung',
    article: undefined,
    singular: "j'ung",
    plural: "j'ung",
    image: undefined,
    sound: require('./sounds/jung_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  finger: {
    id: 'finger',
    word: 'Finger',
    article: 'der',
    singular: "F'in|ger",
    plural: "F'in|ger",
    image: undefined,
    sound: require('./sounds/finger_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zange: {
    id: 'zange',
    word: 'Zange',
    article: 'die',
    singular: "Z'an|ge",
    plural: "Z'an|gen",
    image: require('./images/zange.jpg') as IImageAsset,
    sound: require('./sounds/zange_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  klingel: {
    id: 'klingel',
    word: 'Klingel',
    article: 'die',
    singular: "Kl'in|gel",
    plural: "Kl'in|geln",
    image: require('./images/klingel.jpg') as IImageAsset,
    sound: require('./sounds/klingel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  singen: {
    id: 'singen',
    word: 'singen',
    article: undefined,
    singular: "s'in|gen",
    plural: "s'in|gen",
    image: require('./images/singen.jpg') as IImageAsset,
    sound: require('./sounds/singen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  schlange: {
    id: 'schlange',
    word: 'Schlange',
    article: 'die',
    singular: "Schl'an|ge",
    plural: "Schl'an|gen",
    image: require('./images/schlange.jpg') as IImageAsset,
    sound: require('./sounds/schlange_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zeitung: {
    id: 'zeitung',
    word: 'Zeitung',
    article: 'die',
    singular: 'Z-ei|tung',
    plural: 'Z-ei|tun|gen',
    image: require('./images/zeitung.jpg') as IImageAsset,
    sound: require('./sounds/zeitung_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  muetze: {
    id: 'muetze',
    word: 'Mütze',
    article: 'die',
    singular: "M'üt|ze",
    plural: "M'üt|zen",
    image: require('./images/muetze.jpg') as IImageAsset,
    sound: require('./sounds/muetze_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kueche: {
    id: 'kueche',
    word: 'Küche',
    article: 'die',
    singular: "K'ü|che",
    plural: "K'ü|chen",
    image: require('./images/kueche.jpg') as IImageAsset,
    sound: require('./sounds/kueche_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  tuer: {
    id: 'tuer',
    word: 'Tür',
    article: 'die',
    singular: 'T-ür',
    plural: 'T-ü|ren',
    image: require('./images/tuer.jpg') as IImageAsset,
    sound: require('./sounds/tuer_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  muell: {
    id: 'muell',
    word: 'Müll',
    article: 'der',
    singular: "M'üll",
    plural: undefined,
    image: require('./images/muell.jpg') as IImageAsset,
    sound: require('./sounds/muell_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  tuete: {
    id: 'tuete',
    word: 'Tüte',
    article: 'die',
    singular: 'T-ü|te',
    plural: 'T-ü|ten',
    image: require('./images/tuete.jpg') as IImageAsset,
    sound: require('./sounds/tuete_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  wuerfel: {
    id: 'wuerfel',
    word: 'Würfel',
    article: 'der',
    singular: "W'ür|fel",
    plural: "W'ür|fel",
    image: require('./images/wuerfel.jpg') as IImageAsset,
    sound: require('./sounds/wuerfel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  muesli: {
    id: 'muesli',
    word: 'Müsli',
    article: 'das',
    singular: "M'üs|li",
    plural: undefined,
    image: require('./images/muesli.jpg') as IImageAsset,
    sound: require('./sounds/muesli_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  huegel: {
    id: 'huegel',
    word: 'Hügel',
    article: 'der',
    singular: 'H-ü|gel',
    plural: 'H-ü|gel',
    image: require('./images/huegel.jpg') as IImageAsset,
    sound: require('./sounds/huegel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  guertel: {
    id: 'guertel',
    word: 'Gürtel',
    article: 'der',
    singular: "G'ür|tel",
    plural: "G'ür|tel",
    image: require('./images/guertel.jpg') as IImageAsset,
    sound: require('./sounds/guertel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  muenze: {
    id: 'muenze',
    word: 'Münze',
    article: 'die',
    singular: "M'ün|ze",
    plural: "M'ün|zen",
    image: require('./images/muenze.jpg') as IImageAsset,
    sound: require('./sounds/muenze_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fusz: {
    id: 'fusz',
    word: 'Fuß',
    article: 'der',
    singular: 'F-uß',
    plural: 'F-ü|ße',
    image: undefined,
    sound: require('./sounds/fusz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  strasze: {
    id: 'strasze',
    word: 'Straße',
    article: 'die',
    singular: "Str'a|ße",
    plural: "Str'a|ßen",
    image: require('./images/strasze.jpg') as IImageAsset,
    sound: require('./sounds/strasze_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  grosz: {
    id: 'grosz',
    word: 'groß',
    article: undefined,
    singular: 'gr-oß',
    plural: 'gr-oß',
    image: undefined,
    sound: require('./sounds/grosz_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  sosze: {
    id: 'sosze',
    word: 'Soße',
    article: 'die',
    singular: 'S-o|ße',
    plural: 'S-o|ßen',
    image: require('./images/sosze.jpg') as IImageAsset,
    sound: require('./sounds/sosze_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  heiszen: {
    id: 'heiszen',
    word: 'heißen',
    article: undefined,
    singular: 'h-ei|ßen',
    plural: 'h-ei|ßen',
    image: undefined,
    sound: require('./sounds/heiszen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kaese: {
    id: 'kaese',
    word: 'Käse',
    article: 'der',
    singular: 'K-ä|se',
    plural: undefined,
    image: require('./images/kaese.jpg') as IImageAsset,
    sound: require('./sounds/kaese_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  kaefig: {
    id: 'kaefig',
    word: 'Käfig',
    article: 'der',
    singular: 'K-ä|fig',
    plural: 'K-ä|fi|ge',
    image: require('./images/kaefig.jpg') as IImageAsset,
    sound: require('./sounds/kaefig_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  baer: {
    id: 'baer',
    word: 'Bär',
    article: 'der',
    singular: 'B-är',
    plural: 'B-ä|ren',
    image: require('./images/baer.jpg') as IImageAsset,
    sound: require('./sounds/baer_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  raetsel: {
    id: 'raetsel',
    word: 'Rätsel',
    article: 'das',
    singular: 'R-ät|sel',
    plural: 'R-ät|sel',
    image: undefined,
    sound: require('./sounds/raetsel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  waesche: {
    id: 'waesche',
    word: 'Wäsche',
    article: 'die',
    singular: "W'ä|sche",
    plural: undefined,
    image: require('./images/waesche.jpg') as IImageAsset,
    sound: require('./sounds/waesche_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  baecker: {
    id: 'baecker',
    word: 'Bäcker',
    article: 'der',
    singular: "B'äc|ker",
    plural: "B'äc|ker",
    image: require('./images/baecker.jpg') as IImageAsset,
    sound: require('./sounds/baecker_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  baeckerei: {
    id: 'baeckerei',
    word: 'Bäckerei',
    article: 'die',
    singular: 'Bäc|ke|r-ei',
    plural: 'Bäc|ke|r-ei|en',
    image: require('./images/baeckerei.jpg') as IImageAsset,
    sound: require('./sounds/baeckerei_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  olive: {
    id: 'olive',
    word: 'Olive',
    article: 'die',
    singular: 'Ol-i|ve',
    plural: 'Ol-i|ven',
    image: undefined,
    sound: require('./sounds/olive_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  klavier: {
    id: 'klavier',
    word: 'Klavier',
    article: 'das',
    singular: 'Kla|v-ier',
    plural: 'Kla|v-ie|re',
    image: require('./images/klavier.jpg') as IImageAsset,
    sound: require('./sounds/klavier_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  silvester: {
    id: 'silvester',
    word: 'Silvester',
    article: undefined,
    singular: "Sil|v'es|ter",
    plural: "Sil|v'es|ter",
    image: require('./images/silvester.jpg') as IImageAsset,
    sound: require('./sounds/silvester_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  karneval: {
    id: 'karneval',
    word: 'Karneval',
    article: 'der',
    singular: "K'ar|ne|val",
    plural: undefined,
    image: require('./images/karneval.jpg') as IImageAsset,
    sound: require('./sounds/karneval_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  feuer: {
    id: 'feuer',
    word: 'Feuer',
    article: 'das',
    singular: 'F-eu|er',
    plural: 'F-eu|er',
    image: require('./images/feuer.jpg') as IImageAsset,
    sound: require('./sounds/feuer_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  flugzeug: {
    id: 'flugzeug',
    word: 'Flugzeug',
    article: 'das',
    singular: 'Fl-ug|zeug',
    plural: 'Fl-ug|zeu|ge',
    image: require('./images/flugzeug.jpg') as IImageAsset,
    sound: require('./sounds/flugzeug_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  ankreuzen: {
    id: 'ankreuzen',
    word: 'ankreuzen',
    article: undefined,
    singular: "'an|kreu|zen",
    plural: "'an|kreu|zen",
    image: require('./images/ankreuzen.jpg') as IImageAsset,
    sound: require('./sounds/ankreuzen_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  werkzeug: {
    id: 'werkzeug',
    word: 'Werkzeug',
    article: 'das',
    singular: "W'erk|zeug",
    plural: "W'erk|zeu|ge",
    image: require('./images/werkzeug.jpg') as IImageAsset,
    sound: require('./sounds/werkzeug_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  taxi: {
    id: 'taxi',
    word: 'Taxi',
    article: 'das',
    singular: "T'a|xi",
    plural: "T'a|xis",
    image: require('./images/taxi.jpg') as IImageAsset,
    sound: require('./sounds/taxi_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  text: {
    id: 'text',
    word: 'Text',
    article: 'der',
    singular: "T'ext",
    plural: "T'ex|te",
    image: undefined,
    sound: require('./sounds/text_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  arztpraxis: {
    id: 'arztpraxis',
    word: 'Arztpraxis',
    article: 'die',
    singular: "'Arzt|pra|xis",
    plural: "'Arzt|pra|xen",
    image: undefined,
    sound: require('./sounds/arztpraxis_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  foehn: {
    id: 'foehn',
    word: 'Föhn',
    article: 'der',
    singular: 'F-öhn',
    plural: 'F-öh|ne',
    image: require('./images/foehn.jpg') as IImageAsset,
    sound: require('./sounds/foehn_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  loeffel: {
    id: 'loeffel',
    word: 'Löffel',
    article: 'der',
    singular: "L'öf|fel",
    plural: "L'öf|fel",
    image: require('./images/loeffel.jpg') as IImageAsset,
    sound: require('./sounds/loeffel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  knoedel: {
    id: 'knoedel',
    word: 'Knödel',
    article: 'der',
    singular: "Kn'ö|del",
    plural: "Kn'ö|del",
    image: require('./images/knoedel.jpg') as IImageAsset,
    sound: require('./sounds/knoedel_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  syrien: {
    id: 'syrien',
    word: 'Syrien',
    article: undefined,
    singular: 'S-y|ri|en',
    plural: 'S-y|ri|en',
    image: undefined,
    sound: require('./sounds/syrien_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  asyl: {
    id: 'asyl',
    word: 'Asyl',
    article: 'das',
    singular: 'As-yl',
    plural: 'As-y|le',
    image: undefined,
    sound: require('./sounds/asyl_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  baby: {
    id: 'baby',
    word: 'Baby',
    article: 'das',
    singular: 'B-a|by',
    plural: 'B-a|bys',
    image: require('./images/baby.jpg') as IImageAsset,
    sound: require('./sounds/baby_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  handy: {
    id: 'handy',
    word: 'Handy',
    article: 'das',
    singular: "H'an|dy",
    plural: "H'an|dy",
    image: require('./images/handy.jpg') as IImageAsset,
    sound: require('./sounds/handy_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  cafe: {
    id: 'cafe',
    word: 'Café',
    article: 'das',
    singular: 'Ca|f-é',
    plural: 'Ca|f-és',
    image: require('./images/cafe.jpg') as IImageAsset,
    sound: undefined,
    longSound: undefined
  },

  disco: {
    id: 'disco',
    word: 'Disco',
    article: 'die',
    singular: "D'is|co",
    plural: "D'is|cos",
    image: require('./images/disco.jpg') as IImageAsset,
    sound: require('./sounds/disco_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  computer: {
    id: 'computer',
    word: 'Computer',
    article: 'der',
    singular: 'Com|p-u|ter',
    plural: 'Com|p-u|ter',
    image: require('./images/computer.jpg') as IImageAsset,
    sound: require('./sounds/computer_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  club: {
    id: 'club',
    word: 'Club',
    article: 'der',
    singular: "Cl'ub",
    plural: "Cl'ubs",
    image: require('./images/club.jpg') as IImageAsset,
    sound: require('./sounds/club_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  aquarium: {
    id: 'aquarium',
    word: 'Aquarium',
    article: 'das',
    singular: 'Aqu-a|ri|um',
    plural: 'Aqu-a|ri|en',
    image: require('./images/aquarium.jpg') as IImageAsset,
    sound: require('./sounds/aquarium_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  qualle: {
    id: 'qualle',
    word: 'Qualle',
    article: 'die',
    singular: "Qu'al|le",
    plural: "Qu'al|len",
    image: require('./images/qualle.jpg') as IImageAsset,
    sound: require('./sounds/qualle_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  null: {
    id: 'null',
    word: 'null',
    article: undefined,
    singular: "n'ull",
    plural: "n'ull",
    image: undefined,
    sound: undefined,
    longSound: undefined
  },

  eins: {
    id: 'eins',
    word: 'eins',
    article: undefined,
    singular: '-eins',
    plural: '-eins',
    image: undefined,
    sound: require('./sounds/eins_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zwei: {
    id: 'zwei',
    word: 'zwei',
    article: undefined,
    singular: 'zw-ei',
    plural: 'zw-ei',
    image: undefined,
    sound: require('./sounds/zwei_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  drei: {
    id: 'drei',
    word: 'drei',
    article: undefined,
    singular: 'dr-ei',
    plural: 'dr-ei',
    image: undefined,
    sound: require('./sounds/drei_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  vier: {
    id: 'vier',
    word: 'vier',
    article: undefined,
    singular: 'v-ier',
    plural: 'v-ier',
    image: undefined,
    sound: require('./sounds/vier_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  fuenf: {
    id: 'fuenf',
    word: 'fünf',
    article: undefined,
    singular: "f'ünf",
    plural: "f'ünf",
    image: undefined,
    sound: require('./sounds/fuenf_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  sechs: {
    id: 'sechs',
    word: 'sechs',
    article: undefined,
    singular: "s'echs",
    plural: "s'echs",
    image: undefined,
    sound: require('./sounds/sechs_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  sieben: {
    id: 'sieben',
    word: 'sieben',
    article: undefined,
    singular: 's-ie|ben',
    plural: 's-ie|ben',
    image: undefined,
    sound: require('./sounds/sieben_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  acht: {
    id: 'acht',
    word: 'acht',
    article: undefined,
    singular: "'acht",
    plural: "'acht",
    image: undefined,
    sound: require('./sounds/acht_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  neun: {
    id: 'neun',
    word: 'neun',
    article: undefined,
    singular: 'n-eun',
    plural: 'n-eun',
    image: undefined,
    sound: require('./sounds/neun_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  zehn: {
    id: 'zehn',
    word: 'zehn',
    article: undefined,
    singular: 'z-ehn',
    plural: 'z-ehn',
    image: undefined,
    sound: require('./sounds/zehn_short.mp3') as ISoundAsset,
    longSound: undefined
  },

  vogel: {
    id: 'vogel',
    word: 'Vogel',
    article: 'der',
    singular: 'V-o|gel',
    plural: 'V-ö|gel',
    image: undefined,
    sound: undefined,
    longSound: undefined
  }
};

export default words;
