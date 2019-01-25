/* tslint:disable:no-var-requires */
import * as fs from 'fs';
import * as path from 'path';
import { mergeDeepRight } from 'ramda';
import * as semver from 'semver';

const config = require('../app.json');
const {
  version,
  versionCode,
  dependencies: { expo }
} = require('../package.json');

const isDev = process.argv[2] === 'development';
const expoVersion = expo.replace('^', '');
const sdkVersion = `${semver.major(expoVersion)}.0.0`;

const travisConfig = mergeDeepRight(config, {
  expo: {
    name: `${config.expo.name}${isDev ? ' Nightly' : ''}`,
    slug: `${config.expo.slug}${isDev ? '-development' : ''}`,
    sdkVersion,
    version,
    packagerOpts: {
      nonPersistent: true
    },
    ios: {
      buildNumber: version.split('-')[0]
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
