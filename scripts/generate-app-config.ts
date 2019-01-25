/* tslint:disable:no-var-requires */
import * as fs from 'fs';
import * as path from 'path';
import * as semver from 'semver';
import { mergeDeepRight } from 'ramda';

const config = require('../app.json');
const { version, versionCode, dependencies } = require('../package.json');

const isDev = process.argv[2] === 'development';
const expoVersion = dependencies['expo'].replace('^', '');
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
