import { generateChangelog } from '@splish-me/changelog';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const releases: Parameters<typeof generateChangelog>['0'] = [
  {
    tagName: '1.2.1',
    date: '2019-01-22'
  },
  {
    tagName: '1.2.2',
    date: '2019-02-02',
    changed: ['New app icons'],
    fixed: ['Allow repeating of lessons'],
    internal: [
      'Prepare iOS release',
      'Improve deployment process',
      'Generate changelog'
    ]
  },
  {
    tagName: '1.2.3',
    date: '2019-02-04',
    changed: ["Don't play long sounds in repeat lesson"]
  },
  {
    tagName: '1.2.4',
    date: '2019-06-05',
    fixed: ['Fix chapters using sound files for letters `D` and `R`']
  },
  {
    tagName: '1.3.0',
    date: '2019-06-06',
    changed: ['Update to Expo SDK 33']
  }
];

const writeFile = util.promisify(fs.writeFile);

exec();

async function exec(): Promise<void> {
  const content = await generateChangelog(releases);

  await writeFile(path.join(__dirname, '..', 'CHANGELOG.md'), content);
}
