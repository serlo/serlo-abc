import * as path from 'path';
import * as R from 'ramda';

import { readdir, writeFile } from '../packages/node-promises';

const videosPath = path.join(__dirname, '..', 'packages', 'assets', 'videos');
const assetsPath = path.join(__dirname, '..', 'src', 'assets');

const getExtname = path.extname;
const getFilename = (file: string) =>
  file.substr(0, file.length - getExtname(file).length);

readdir(videosPath).then(files => {
  // Loaders for React Native app
  let str = `import { AssetTypes } from '../../packages/entities';

    const videos: { [id: string]: () => AssetTypes.VideoAsset } = {`;

  R.forEach(file => {
    str += `
  ${getFilename(file)}_hd: () => require('./sounds/${getFilename(
      file
    )}.hd${getExtname(file)}'),
  ${getFilename(file)}_sd: () => require('./sounds/${getFilename(
      file
    )}.sd${getExtname(file)}'),`;
  }, files);

  str += `
};

export default videos;`;

  return writeFile(path.join(assetsPath, 'videos.ts'), str);
});
