import { getStorybookUI, configure } from '@kadira/react-native-storybook';
import url from 'url'

import './addons';

import { NativeModules } from 'react-native'

configure(function() {
    require('./stories');
}, module);

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

export default getStorybookUI({ port: 7007, host: hostname })
