import * as R from 'ramda';
import createCourse from '../packages/entities-interactor/CourseFactory';
import { AbstractNode, InternalNode, Leaf } from '../packages/entities/course';
import loadWordImage from '../src/assets/words/images';
import loadWordSound from '../src/assets/words/sounds';

const courses = require('../packages/assets/courses.json');
const wordsDb = require('../packages/assets/words.json');

const getVocabularyRecursive = (node: AbstractNode): string[] => {
  if (node instanceof Leaf) {
    return node.getNewVocabulary();
  }
  const internalNode = node as InternalNode;

  return R.uniq([
    ...internalNode.getNewVocabulary(),
    ...R.flatten<string>(
      R.map(getVocabularyRecursive, internalNode.getChildren())
    )
  ]);
};

R.map(rawCourse => {
  const course = createCourse(rawCourse);
  const words = getVocabularyRecursive(course);

  R.forEach(word => {
    const id = word
      .toLowerCase()
      .replace(/\s/g, '_')
      .replace(/ß/g, 'sz')
      .replace(/ä/g, 'ae')
      .replace(/ü/g, 'ue')
      .replace(/ö/g, 'oe')
      .replace(/é/g, 'e');

    if (typeof wordsDb[id] === 'undefined') {
      console.log(`[ERR] Word does not exist:`, id);
      return;
    }

    if (typeof loadWordImage[id] === 'undefined') {
      console.log(`[ERR] Image does not exist:`, id);
      return;
    }

    if (typeof loadWordSound[`${id}_short`] === 'undefined') {
      console.log(`[ERR] Sound does not exist:`, id);
      return;
    }

    // if (typeof loadWordSound[`${id}_long`] === 'undefined') {
    //   console.log(`[WARN] Long sound does not exist:`, id)
    //   return;
    // }
  }, words);
}, courses);
