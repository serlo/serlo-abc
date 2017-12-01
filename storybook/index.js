import { getStorybookUI, configure } from '@storybook/react-native';
import { NativeModules } from 'react-native';
import url from 'url';

import './addons';

configure(() => {
  require('./stories');
}, module);

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

export default getStorybookUI({ port: 7007, host: hostname });
