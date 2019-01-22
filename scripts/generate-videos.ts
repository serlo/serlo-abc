import ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as path from 'path';
import * as R from 'ramda';
import * as utils from 'util';

// tslint:disable-next-line:no-any
const ffprobe = utils.promisify<string, any>(ffmpeg.ffprobe);

import { readdir, writeFile } from '../packages/node-promises';

const videosPath = path.join(__dirname, '..', 'packages', 'assets', 'videos');
const assetsPath = path.join(__dirname, '..', 'src', 'assets');

const getExtname = path.extname;
const getFilename = (file: string) =>
  file.substr(0, file.length - getExtname(file).length);

readdir(videosPath)
  .then(files => {
    return R.filter(file => /\.mp4$/.test(file), files);
  })
  .then(files => {
    // Loaders for React Native app
    let str = `import { AssetTypes } from '../../packages/entities';

    const videos = {`;

    R.forEach(file => {
      if (!file.match(/\.mp4$/)) {
        return;
      }

      str += `${getFilename(file)}: {
      sd: { uri: 'https://assets.serlo.org/serlo-abc/${getFilename(
        file
      )}.sd.mp4' },
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

    // tslint:disable-next-line:no-shadowed-variable
    const processFiles = (files: string[]): Promise<void> => {
      if (!files || !files[0]) {
        return Promise.resolve();
      }

      const [file, ...rest] = files;

      const source = path.join(videosPath, file);
      const target = path.join(
        assetsPath,
        'videos',
        `${getFilename(file)}.sd.mp4`
      );

      if (fs.existsSync(target)) {
        return processFiles(rest);
      }

      return ffprobe(source)
        .then(data => {
          const { width, height } = data.streams[0].tags;

          return width < height ? '480x?' : '?x480';
        })
        .then((size: string) => {
          return new Promise<void>(resolve => {
            // @ts-ignore FIXME:
            ffmpeg(source)
              .size(size)
              .on('end', (stdout: string, stderr: string) => {
                processFiles(rest).then(() => {
                  resolve();
                });
              })
              .save(target);
          });
        });
    };

    return Promise.all([
      writeFile(path.join(assetsPath, 'videos.ts'), str)
      // processFiles(files)
    ]);
  });
