import * as fs from 'fs';
import * as path from 'path';
import { identity, mergeDeepRight } from 'ramda';

export interface Config {
  /* tslint:disable-next-line:no-any */
  [propName: string]: any;
}

export const writeTravisAppConfigSync = (
  override: (baseConfig: Config) => Config = identity
) => {
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

  const travisConfig = override(baseConfig);

  fs.writeFileSync(
    path.join(__dirname, '..', 'app.json'),
    JSON.stringify(travisConfig, undefined, 2)
  );
};
