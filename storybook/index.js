import { getStorybookUI, configure } from '@kadira/react-native-storybook';
import React from 'react';
import url from 'url';

import loadFonts from '../src/components/helpers/fonts';
import './addons';

import { NativeModules } from 'react-native';

configure(function() {
  require('./stories');
}, module);

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

const StorybookUI = getStorybookUI({ port: 19001, host: hostname });

const App = ({ fontsLoaded }) => fontsLoaded && <StorybookUI />;

export default loadFonts({
  norddruck: require('../src/assets/fonts/norddruck.ttf'),
  serlo: require('../src/assets/fonts/serlo.ttf')
})(App);
