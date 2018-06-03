import { subClass } from 'gm';
// @ts-ignore: TODO: add declaration file
import * as path from 'path';
import * as R from 'ramda';

import { readdir, unlink, writeFile } from '../packages/node-promises';

const gm = subClass({ imageMagick: true });

// Base width of images
const suffixes = [''];
const sizes = [800];

const imagesPath = path.join(
  __dirname,
  '..',
  'packages',
  'assets',
  'words',
  'images'
);
const assetsPath = path.join(__dirname, '..', 'src', 'assets', 'words');
const outputPath = path.join(assetsPath, 'images');

const getExtname = path.extname;
const getFilename = (file: string) =>
  file.substr(0, file.length - getExtname(file).length);

readdir(outputPath)
  .then(files =>
    // Clean output directory
    Promise.all(
      R.map(file => {
        if (file.match(/\.jpg$/)) {
          return unlink(path.join(outputPath, file));
        }
        return Promise.resolve();
      }, files)
    )
  )
  .then(() => readdir(imagesPath))
  .then(files => {
    // Loaders for React Native app
    let str = `import { AssetTypes } from '../../../packages/entities';

    const images: { [id: string]: () => AssetTypes.ImageAsset } = {`;

    R.forEach(file => {
      str += `
  ${getFilename(file)}: () => require('./images/${file}'),`;
    }, files);

    str += `
};

export default images;`;

    // Process files
    return Promise.all([
      writeFile(path.join(assetsPath, 'images.ts'), str),
      Promise.all(
        R.map(file => {
          const source = path.join(imagesPath, file);

          // Create three output files
          const targets = R.map(
            suffix =>
              path.join(
                outputPath,
                `${getFilename(file)}${suffix}${getExtname(file)}`
              ),
            suffixes
          );

          return Promise.all(
            R.zipWith(
              (target, size) =>
                new Promise((resolve, reject) => {
                  gm(source)
                    .resize(size, size, '!')
                    .quality(0.8)
                    .write(target, err => {
                      if (err) {
                        reject(err);
                        return;
                      }

                      resolve();
                    });
                }),
              targets,
              sizes
            )
          );
        }, files)
      )
    ]);
  });
