import * as fs from 'fs';
import * as path from 'path';
import * as R from 'ramda';

import { readdir, unlink, writeFile } from '../packages/node-promises';

const soundsPath = path.join(
  __dirname,
  '..',
  'packages',
  'assets',
  'words',
  'sounds'
);
const assetsPath = path.join(__dirname, '..', 'src', 'assets', 'words');
const outputPath = path.join(assetsPath, 'sounds');

const getExtname = path.extname;
const getFilename = (file: string) =>
  file.substr(0, file.length - getExtname(file).length);

readdir(outputPath)
  .then(files =>
    // Clean output directory
    Promise.all(
      R.map(file => {
        if (file.match(/\.mp3$/)) {
          return unlink(path.join(outputPath, file));
        }
        return Promise.resolve();
      }, files)
    )
  )
  .then(() => readdir(soundsPath))
  .then(files => {
    // Loaders for React Native app
    let str = `import { ISoundAsset } from '../../types/assets';

    const sounds: { [id: string]: () => ISoundAsset } = {`;

    R.forEach(file => {
      str += `
  ${getFilename(file)}: () => require('./sounds/${file}'),`;
    }, files);

    str += `
};

export default sounds;`;

    // Process files
    return Promise.all([
      writeFile(path.join(assetsPath, 'sounds.ts'), str),
      Promise.all(
        R.map(file => {
          const source = path.join(soundsPath, file);
          const target = path.join(outputPath, file);

          return new Promise((resolve, reject) => {
            const readStream = fs.createReadStream(source);
            const writeStream = fs.createWriteStream(target);

            readStream.on('error', reject);
            writeStream.on('error', reject);
            writeStream.on('close', resolve);

            readStream.pipe(writeStream);
          });
        }, files)
      )
    ]);
  });
