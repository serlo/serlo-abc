import { getStorybookUI, configure } from '@storybook/react-native';
import React from 'react';
import { NativeModules } from 'react-native';
import url from 'url';

import loadFonts from '../src/components/helpers/fonts';
import './addons';

configure(() => {
  require('./stories');
}, module);

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

const StorybookUI = getStorybookUI({ port: 7007, host: hostname });

const App = ({ fontsLoaded }) => fontsLoaded && <StorybookUI />;

export default loadFonts({
  norddruck: require('../src/assets/fonts/norddruck.ttf'),
  serlo: require('../src/assets/fonts/serlo.ttf')
})(App);
