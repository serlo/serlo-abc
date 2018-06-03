/* tslint:disable:no-var-requires */
import * as fs from 'fs';
import * as path from 'path';
import { mergeDeepRight } from 'ramda';

const config = require('../app.json');
const { version } = require('../package.json');

const travisConfig = mergeDeepRight(config, {
  expo: {
    name: `${config.expo.name}${
      process.argv[2] === 'development' ? ' Nightly' : ''
    }`,
    version,
    packagerOpts: {
      nonPersistent: true
    }
  }
});

fs.writeFileSync(
  path.join(__dirname, '..', 'app.travis.json'),
  JSON.stringify(travisConfig, undefined, 2)
);
