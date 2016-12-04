import { getStorybookUI, configure } from '@kadira/react-native-storybook'
import { AppRegistry } from 'react-native'

configure(() => require('./stories'), module)

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' })
AppRegistry.registerComponent('SerloABC', () => StorybookUI)
