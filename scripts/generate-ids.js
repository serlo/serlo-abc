/* eslint-env node */
const fs = require('fs');
const path = require('path');
const R = require('ramda');
const { v4 } = require('uuid');

const assetsPath = path.join(__dirname, '..', 'src', 'assets');

const courses = require(path.join(assetsPath, 'courses.json'));

const generateId = entity => R.merge({ id: v4() }, entity);

const generateIds = tree => {
  const treeWithId = generateId(tree);

  if (tree.children) {
    return R.merge(treeWithId, { children: R.map(generateIds, tree.children) });
  }

  return treeWithId;
};

const newCourses = R.map(generateIds, courses);

fs.writeFile(path.join(assetsPath, 'courses.json'), JSON.stringify(newCourses));
