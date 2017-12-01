/* tslint:disable:no-var-requires */
import * as fs from 'fs';
import * as path from 'path';
import { mergeDeepRight } from 'ramda';

const config = require('../app.json');
const { version } = require('../package.json');

const baseConfig = mergeDeepRight(config, {
  expo: {
    version,
    packagerOpts: {
      nonPersistent: true
    }
  }
});

const travisConfig = baseConfig;

fs.writeFileSync(
  path.join(__dirname, '..', 'app.json'),
  JSON.stringify(travisConfig, undefined, 2)
);
