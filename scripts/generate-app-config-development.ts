import { mergeDeepRight } from 'ramda';

import { Config, writeTravisAppConfigSync } from './generate-app-config';

writeTravisAppConfigSync((baseConfig: Config) => {
  const { expo } = baseConfig;

  return mergeDeepRight(baseConfig, {
    expo: {
      slug: `${expo.slug}-development`,
      ios: {
        bundleIdentifier: `${expo.ios.bundleIdentifier}-development`
      },
      android: {
        package: `${expo.android.package}-development`
      }
    }
  });
});
