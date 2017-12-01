import { AppLoading } from 'expo';
import * as React from 'react';
import Sentry from 'sentry-expo';

import { CacheAssets } from './src/components/helpers/cache-assets';
import loadImage from './src/assets/images';
import loadSound from './src/assets/sounds';

Sentry.config(
  'https://eada474aeba348a9aaad570be730e8e0:bb2a0776afe64f409a9edb752ca2d92d@sentry.io/253336'
).install();

const fonts = {
  norddruck: require('./src/assets/fonts/norddruck.ttf'),
  norddruck_arrows: require('./src/assets/fonts/norddruck_arrows.ttf'),
  serlo: require('./src/assets/fonts/serlo.ttf')
};

export default class App extends React.Component {
  render() {
    const Entry = __DEV__
      ? require('./storybook').default
      : require('./src').default;

    return (
      <CacheAssets
        fonts={fonts}
        assets={[
          loadImage['serlo'](),
          loadSound['guten_morgen'](),
          loadSound['guten_tag'](),
          loadSound['guten_abend']()
        ]}
        render={done => {
          if (done) {
            return <Entry />;
          }

          return <AppLoading />;
        }}
      />
    );
  }
}
