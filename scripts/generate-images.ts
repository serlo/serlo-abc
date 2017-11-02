import { subClass } from 'gm';
// @ts-ignore: TODO: add declaration file
import * as path from 'path';
import * as R from 'ramda';

import { readdir, unlink } from '../packages/node-promises';

const gm = subClass({ imageMagick: true });

// Base width of images
const baseWidth = 200;
const suffixes = ['@1x', '@2x', '@3x'];
const sizes = R.times(i => baseWidth * (i + 1), 3);
const imagesPath = path.join(__dirname, '..', 'packages', 'assets', 'images');
const outputPath = path.join(__dirname, '..', 'src', 'assets', 'images');

readdir(outputPath)
  .then(files => {
    // Clean output directory
    Promise.all(
      R.map(file => {
        if (file.match(/\.jpg$/)) {
          return unlink(path.join(outputPath, file));
        }
        return Promise.resolve();
      }, files)
    );
  })
  .then(() => readdir(imagesPath))
  .then((files: string[]) =>
    // Process files
    Promise.all(
      R.map(file => {
        const source = path.join(imagesPath, file);
        const extname = path.extname(file);
        const filename = file.substr(0, file.length - extname.length);

        // Create three output files
        const targets = R.map(
          suffix => path.join(outputPath, `${filename}${suffix}${extname}`),
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
  );
