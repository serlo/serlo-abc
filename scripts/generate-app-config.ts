/* tslint:disable:no-var-requires */
import * as fs from 'fs';
import * as path from 'path';
import { mergeDeepRight } from 'ramda';

const config = require('../app.json');
const { version, versionCode } = require('../package.json');

const isDev = process.argv[2] === 'development';

const travisConfig = mergeDeepRight(config, {
  expo: {
    name: `${config.expo.name}${isDev ? ' Nightly' : ''}`,
    slug: `${config.expo.slug}${isDev ? '-development' : ''}`,
    version,
    packagerOpts: {
      nonPersistent: true
    },
    ios: {
      buildNumber: version
    },
    android: {
      versionCode
    }
  }
});

fs.writeFileSync(
  path.join(__dirname, '..', 'app.travis.json'),
  JSON.stringify(travisConfig, undefined, 2)
);
