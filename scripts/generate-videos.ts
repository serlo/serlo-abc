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

    const videos = {`;

  R.forEach(file => {
    str += `${getFilename(file)}: {
      sd: require('./videos/${getFilename(file)}.sd.mp4'),
      hd: { uri: 'https://assets.serlo.org/serlo-abc/${getFilename(
        file
      )}.hd.mp4' }
    },`;
  }, files);

  str += `
};


// @ts-ignore
export default videos as { [id: string]: { sd: AssetTypes.VideoAsset, hd: AssetTypes.VideoAsset } };
`;

  return writeFile(path.join(assetsPath, 'videos.ts'), str);
});
