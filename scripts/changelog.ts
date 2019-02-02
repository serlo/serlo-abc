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
    changed: [
      'New app icons'
    ],
    fixed: [
      'Allow repeating of lessons'
    ],
    internal: [
      'Prepare iOS release',
      'Improve deployment process',
      'Generate changelog'
    ]
  }
];

const writeFile = util.promisify(fs.writeFile);

exec();

async function exec(): Promise<void> {
  const content = await generateChangelog(releases);

  await writeFile(path.join(__dirname, '..', 'CHANGELOG.md'), content);
}
